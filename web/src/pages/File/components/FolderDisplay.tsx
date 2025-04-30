import { Flex, HorizontalScrollBox } from '@/components/common';
import BorderWrapper from '@/components/common/BorderWrapper';
import Modals from '@/components/ui/Modals';
import useDisclosure from '@/hooks/useDisclosure';
import { IconButton, SvgIcon, Typography, useTheme } from '@mui/material';
import { ChevronRight, Folder, Plus } from 'lucide-react';
import React from 'react';
import FolderCreateForm from './FolderCreateForm';

const FolderDisplay: React.FC = () => {
  const theme = useTheme();
  const { isOpen, onToggle } = useDisclosure();

  const folderRef = React.useRef<{
    onSubmit: () => Promise<void> | undefined;
    returnData: () => Promise<{
      title: string;
      color: string;
    }>;
  }>(null);

  return (
    <Flex flexDirection={'column'} gap={2}>
      <Flex justifyContent={'space-between'} px={2} alignItems={'center'}>
        <Flex gap={2} alignItems={'center'}>
          <Typography color={'primary.contrastText'} variant="h4">
            Folders
          </Typography>
          <IconButton
            onClick={onToggle}
            sx={{
              boxShadow: 1,
              bgcolor: 'error.main',
              width: '25px',
              height: '25px',
              transition: 'background-color 300ms linear',
              '&:hover': {
                bgcolor: 'error.dark'
              }
            }}
          >
            <Plus strokeWidth={3} style={{ color: theme.palette.error.contrastText }} />
          </IconButton>
        </Flex>
        <Flex alignItems={'center'} gap={1} sx={{ cursor: 'pointer' }}>
          <Typography color={'primary.contrastText'} fontWeight={700} sx={{ textDecoration: 'underline' }}>
            View all
          </Typography>
          <ChevronRight size={16} style={{ color: theme.palette.primary.contrastText }} />
        </Flex>
      </Flex>
      <HorizontalScrollBox>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
        <BorderWrapper
          display={'flex'}
          minWidth={'fit-content'}
          px={3}
          py={3}
          borderColor={`rgba(${theme.palette.secondary.lightChannel}, .5)`}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <Flex flexDirection={'column'} gap={0}>
            <SvgIcon component={Folder} fontSize="large" sx={{ color: theme.palette.secondary.main }} />
            <Typography fontWeight={700} color={'secondary.main'} fontSize={'18px'}>
              Docs
            </Typography>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'11px'}>
              2.24GB • 200 files
            </Typography>
          </Flex>
          <Flex flexDirection={'column'} gap={0}>
            <Typography fontWeight={700} color={'text.secondary'} fontSize={'16px'}>
              Icons
            </Typography>
          </Flex>
        </BorderWrapper>
      </HorizontalScrollBox>
      <Modals.Form
        title="Create Folder"
        isOpen={isOpen}
        onClose={onToggle}
        onSubmit={async () => {
          const data = await folderRef.current?.returnData?.();
          if (!data) return;

          await folderRef.current?.onSubmit?.();
          onToggle();
        }}
        confirmText="Create"
      >
        <FolderCreateForm ref={folderRef} />
      </Modals.Form>
    </Flex>
  );
};

export default FolderDisplay;
