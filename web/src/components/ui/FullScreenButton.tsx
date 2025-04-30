import { IconButton, useTheme } from '@mui/material';
import { Maximize, Minimize } from 'lucide-react';
import React from 'react';

const FullScreenButton: React.FC<{ size?: number }> = ({ size = 20 }) => {
  const theme = useTheme();
  const [isFullscreen, setFullscreen] = React.useState<Element>(document.fullscreenElement);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setFullscreen(document.fullscreenElement));
    } else {
      document.exitFullscreen().then(() => setFullscreen(null));
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [document.fullscreenElement]);

  return (
    <IconButton onClick={toggleFullscreen}>
      {isFullscreen ? (
        <Minimize size={size} color={theme.palette.text.primary} />
      ) : (
        <Maximize size={size} color={theme.palette.text.primary} />
      )}
    </IconButton>
  );
};

export default FullScreenButton;
