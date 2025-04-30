import BorderWrapper from '@/components/common/BorderWrapper';
import { TFontOption } from '@/types';
import SingleFontToggle from './SingleFontToggle';

type TFontToggleProps = {
  fontOptions: TFontOption[];
};

const FontToggle: React.FC<TFontToggleProps> = ({ fontOptions }) => {
  return (
    <BorderWrapper
      boxShadow={1}
      borderColor={'primary.dark'}
      display={'flex'}
      flexWrap={'wrap'}
      width={'100%'}
      maxWidth={'375px'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={1}
      px={0}
      py={2}
    >
      {fontOptions.map((font, index) => (
        <SingleFontToggle key={index} font={font} />
      ))}
    </BorderWrapper>
  );
};

export default FontToggle;
