import { PropHandlerType } from '../components/PropHandler';

export const largeToggleProps: PropHandlerType[] = [
  {
    propName: 'singleThemeToggle',
    propDescription: 'Determines whether the toggle switches between a single theme mode or toggles between two states.',
    propType: 'boolean',
    propDefault: 'false'
  },
  {
    propName: 'themeControl',
    propDescription: 'Specifies the theme to switch to when `singleThemeToggle` is enabled.',
    propType: "'dark'\n| 'light'\n| 'system'"
  },
  {
    propName: 'offStateTheme',
    propDescription: "Specifies the theme considered 'off' when `singleThemeToggle` is false.",
    propType: "'dark'\n| 'light'\n| 'system'"
  }
];

export const animatedIconButtonProps: PropHandlerType[] = [
  {
    propName: 'animationType',
    propDescription: "Defines the type of animation to be applied to the icon button. Can either be 'bounce' or 'rotate'.",
    propType: 'EAnimationTypes.BOUNCE\n| EAnimationTypes.ROTATE'
  },
  {
    propName: 'animationSpeed',
    propDescription: "Defines the speed of the animation. Can be 'slow', 'medium', or 'fast'.",
    propType: 'TAnimationSpeed'
  },
  {
    propName: 'children',
    propDescription: 'The child element to be rendered inside the IconButton, typically an icon or other component.',
    propType: 'React.ReactElement'
  },
  {
    propName: 'rest',
    propDescription: "Additional props inherited from MUI's IconButton component.",
    propType: 'IconButtonProps'
  }
];

export const singleFontToggleProps: PropHandlerType[] = [
  {
    propName: 'font',
    propDescription: "The font option to be applied. Includes the font's display name and value.",
    propType: `{
  displayName: string;
  fontValue: string;
}`
  }
];

export const userProfilePictureProps: PropHandlerType[] = [
  {
    propName: 'imageUrl',
    propDescription: "The URL of the user's profile image. If undefined, the component won't display an image.",
    propType: 'string | undefined'
  },
  {
    propName: 'size',
    propDescription: 'Controls the size of the profile picture, adjusting padding and dimensions.',
    propType: "'default' | 'small'",
    propDefault: "'default'"
  },
  {
    propName: 'useExternal',
    propDescription: 'Determines whether to use an external URL directly or append the image URL with the base URL.',
    propType: 'boolean'
  }
];

export const drawerTextHeaderProps: PropHandlerType[] = [
  {
    propName: 'title',
    propDescription: 'The header title displayed in the drawer. Can be a string or a custom React element.',
    propType: 'React.ReactElement | string'
  },
  {
    propName: 'leftButtonIcons',
    propDescription: 'Array of IconButton elements to render to the left of the close button.',
    propType: 'React.ReactElement<IconButtonProps>[]'
  },
  {
    propName: 'rightButtonIcons',
    propDescription: 'Array of IconButton elements to render to the right of the close button.',
    propType: 'React.ReactElement<IconButtonProps>[]'
  },
  {
    propName: 'useCloseButton',
    propDescription: 'Enables the default close (X) button inside the header.',
    propType: 'boolean'
  },
  {
    propName: 'onClose',
    propDescription: 'Callback function triggered when the close button is clicked. Required if `useCloseButton` is true.',
    propType: '() => void'
  },
  {
    propName: 'rest',
    propDescription:
      "Additional props inherited from MUI's Box component, excluding layout-related props like flexDirection, alignItems, etc.",
    propType: 'BoxProps'
  }
];

export const drawerProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'The content inside the drawer, typically components or UI elements.',
    propType: 'React.ReactElement'
  },
  {
    propName: 'disableBackdropClick',
    propDescription: "If true, the backdrop click event will be ignored and the drawer won't close when clicking outside the drawer area.",
    propType: 'boolean'
  },
  {
    propName: 'useBackDropEffects',
    propDescription: 'If true, applies a blur effect to the backdrop of the drawer.',
    propType: 'boolean'
  },
  {
    propName: 'autoCloseOnCondition',
    propDescription: 'If true, the drawer will automatically close when `autoCloseCondition` is true.',
    propType: 'boolean'
  },
  {
    propName: 'autoCloseCondition',
    propDescription: 'Condition that, when true, will trigger the drawer to close if `autoCloseOnCondition` is true.',
    propType: 'boolean'
  },
  {
    propName: 'rest',
    propDescription:
      "Additional props inherited from MUI's `Drawer` component. These are the default props for MUI's Drawer, excluding 'open' and 'onClose'.",
    propType: 'DrawerProps'
  }
];

export const iconDrawerProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'Content to be rendered inside the drawer.',
    propType: 'React.ReactElement'
  },
  {
    propName: 'icon',
    propDescription: 'React element that triggers the drawer on click.',
    propType: 'React.ReactElement'
  },
  {
    propName: 'animateIcon',
    propDescription: 'Whether to apply animation to the icon.',
    propType: 'boolean'
  },
  {
    propName: 'animationType',
    propDescription: 'Type of animation applied to the icon when `animateIcon` is true.',
    propType: "'rotate'\n'bounce'",
    propDefault: "'rotate'"
  },
  {
    propName: 'animationSpeed',
    propDescription: 'Controls the speed of the icon animation.',
    propType: "'slow'\n'medium'\n'fast'",
    propDefault: "'medium'"
  },
  {
    propName: 'iconButtonProps',
    propDescription: 'Additional MUI `IconButton` props passed when `animateIcon` is false.',
    propType: 'IconButtonProps'
  },
  {
    propName: 'drawerProps',
    propDescription: 'Props forwarded to the `Drawer` component (excluding `open`, `onClose`, and `children`).',
    propType: 'DrawerProps'
  }
];

export const basicModalProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'Children to render inside the modal. Use the provided subcomponents for structure.',
    propType: 'React.ReactNode'
  },
  {
    propName: 'position',
    propDescription: 'Vertical position of the modal on the screen.',
    propType: "'top'\n'center'",
    propDefault: "'center'"
  },
  {
    propName: 'px',
    propDescription: 'Horizontal padding (px) applied to the modal container.',
    propType: 'number',
    propDefault: '5'
  },
  {
    propName: 'isOpen',
    propDescription: 'Controls whether the modal is open.',
    propType: 'boolean'
  },
  {
    propName: 'onClose',
    propDescription: 'Callback triggered when the modal is dismissed (except for backdrop clicks).',
    propType: '() => void'
  }
];

export const modalTitleProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'The title content to display inside the modal.',
    propType: 'React.ReactNode'
  }
];

export const modalCloseButtonProps: PropHandlerType[] = [
  {
    propName: 'onClick',
    propDescription: 'Function to trigger when the close icon is clicked.',
    propType: '() => void'
  }
];

export const modalBodyProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'The content to render inside the body of the modal.',
    propType: 'React.ReactNode'
  }
];

export const modalFooterProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'Content for the modal footer, such as buttons.',
    propType: 'React.ReactNode'
  }
];

export const confirmModalProps: PropHandlerType[] = [
  {
    propName: 'text',
    propDescription: 'The content inside the modal body.',
    propType: 'string\n| React.ReactNode'
  },
  {
    propName: 'onConfirm',
    propDescription: 'Function called when the confirm button is clicked.',
    propType: '(e: React.MouseEvent<HTMLButtonElement>) => void'
  },
  {
    propName: 'onCancel',
    propDescription: 'Optional function called when the cancel button is clicked.',
    propType: '() => void'
  },
  {
    propName: 'modalTitle',
    propDescription: 'Optional title displayed at the top of the modal.',
    propType: 'string'
  },
  {
    propName: 'confirmText',
    propDescription: 'Text for the confirm button.',
    propType: 'string'
  },
  {
    propName: 'disableCancelButton',
    propDescription: 'If true, hides the cancel button.',
    propType: 'boolean'
  }
];

export const formModalProps: PropHandlerType[] = [
  {
    propName: 'isOpen',
    propDescription: 'Controls whether the modal is visible.',
    propType: 'boolean'
  },
  {
    propName: 'onClose',
    propDescription: 'Function called when the modal requests to close.',
    propType: '() => void'
  },
  {
    propName: 'onSubmit',
    propDescription: 'Function called when the confirm button is clicked.',
    propType: '() => void'
  },
  {
    propName: 'title',
    propDescription: 'Title displayed in the modal header.',
    propType: 'string'
  },
  {
    propName: 'confirmText',
    propDescription: 'Text shown in the confirm (submit) button.',
    propType: 'string'
  },
  {
    propName: 'disableConfirm',
    propDescription: 'Disables the confirm button when true.',
    propType: 'boolean'
  },
  {
    propName: 'cancelCustomEvent',
    propDescription: 'If defined, called instead of onClose when the cancel button is clicked.',
    propType: '() => void'
  },
  {
    propName: 'cancelText',
    propDescription: 'Text shown in the cancel button.',
    propType: 'string'
  },
  {
    propName: 'children',
    propDescription: 'Form content or any custom JSX to display inside the modal body.',
    propType: 'React.ReactNode'
  }
];

export const borderWrapperProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'Content to be rendered inside the bordered container.',
    propType: 'React.ReactNode'
  },
  {
    propName: 'rest',
    propDescription: "All other `BoxProps` from MUI's Box component, allowing full style and layout control.",
    propType: 'BoxProps'
  }
];

export const toastifyProps: PropHandlerType[] = [
  {
    propName: 'label',
    propDescription: 'The message to display in the toast.',
    propType: 'string'
  }
];

export const simpleProgressBarProps: PropHandlerType[] = [
  {
    propName: 'size',
    propDescription: 'Controls the height of the progress bar.',
    propType: `"small"
| "medium" 
| "large"`,
    propDefault: '"small"'
  },
  {
    propName: 'progress',
    propDescription: 'The current progress to display, as a string percentage (e.g., "50%").',
    propType: 'string',
    propDefault: '"0%"'
  },
  {
    propName: 'colorScheme',
    propDescription: 'The color palette key used for the progress bar styling.',
    propType: `"success"
| "info"
| "error"
| "warning"
| "primary"
| "secondary"`,
    propDefault: '"secondary"'
  },
  {
    propName: 'rest',
    propDescription: "Any additional props from MUI's Box component.",
    propType: 'BoxProps'
  }
];

export const boxSliderProps: PropHandlerType[] = [
  {
    propName: 'children',
    propDescription: 'The `BoxSliderChild` components that will be displayed in the slider.',
    propType: 'React.ReactNode'
  },
  {
    propName: 'animationSpeed',
    propDescription: 'The interval (in milliseconds) at which the slides change automatically.',
    propType: 'number',
    propDefault: '3000'
  },
  {
    propName: 'rest',
    propDescription: "Any additional props from MUI's Box component.",
    propType: 'BoxProps'
  }
];
