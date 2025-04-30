import { TableRowOwnProps, Theme } from '@mui/material';
import { LucideIcon } from 'lucide-react';
import { ENavigationLinkTypes } from './enums';

export type TCategory = {
  title: string;
  paths: TNavigationLink[];
  imageURL?: string;
};

export type TNavigationLink =
  | {
      name: string;
      path: string;
      type: ENavigationLinkTypes.LINK;
      categories?: never;
    }
  | {
      name: string;
      path?: never;
      type: ENavigationLinkTypes.DROPDOWN;
      categories: TCategory[];
    };

export type TFontOption = {
  displayName: string;
  fontValue: string;
};

type TSidebarPathsDefault = {
  icon?: LucideIcon;
  name: string;
  adminPath?: boolean;
};

export type TListPaths = TSidebarPathsDefault & {
  type: 'list';
  path?: never;
  parentPath: string;
  paths: (TSidebarPathsDefault & { path: string })[];
};
export type TSidebarPaths = TListPaths | (TSidebarPathsDefault & { type: 'default'; path: string; paths?: never; parentPath?: never });

export type TSidebarLink = {
  groupTitle?: string;
  paths: TSidebarPaths[];
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type TTableStyleProps = {
  dense?: boolean;
  verticalAlign?: 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom';
  variant?: 'simple' | 'rounded' | 'custom';
  customHeaderSx?: TableRowOwnProps['sx'];
  customRowSx?: TableRowOwnProps['sx'];
  theme?: Theme;
};

export type TFoldersResponse = { _id: string; title: string; color: string; createdAt: string; filesCount: number; totalSize: string };
export type TFilesResponse = {
  _id: string;
  createdAt: string;
  fileName: string;
  fileSize: string;
  folderName: string;
  mimetype: string;
  path: string;
  type: 'file';
};

export type TAnimationTypes = 'rotate' | 'bounce';
