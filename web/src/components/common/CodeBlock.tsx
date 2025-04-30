'use client';
import { CopyIcon } from 'lucide-react';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { mode } from '@/store/reducers/theme-slice';
import { Box, IconButton } from '@mui/material';
import { CheckIcon } from 'lucide-react';
import { useSelector } from 'react-redux';

type CodeBlockProps = {
  children: string;
  language?: string;
  rounded?: boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = 'tsx', rounded }) => {
  const userTheme = useSelector(mode);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      style={{ position: 'relative', overflow: 'hidden' }}
      sx={{ borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
      boxShadow={3}
      borderRadius={rounded ? '16px' : ''}
      maxWidth={'100%'}
    >
      <SyntaxHighlighter
        language={language}
        style={userTheme === 'dark' ? materialDark : materialLight}
        customStyle={{ margin: 0, fontSize: '0.8125rem' }}
      >
        {children}
      </SyntaxHighlighter>
      <IconButton onClick={handleCopy} style={{ position: 'absolute', top: 8, right: 8, color: 'gray' }}>
        {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
      </IconButton>
    </Box>
  );
};

export default CodeBlock;
