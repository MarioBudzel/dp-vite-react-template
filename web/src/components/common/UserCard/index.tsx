import { CardActions, UserCardBody } from '@/components/ui';
import UserProfilePicture from '@/components/ui/UserCard/UserProfilePicture';
import { BoxProps } from '@mui/material';
import React from 'react';
import Flex from '../Flex.component';

const UserCard: React.FC<{ children: React.ReactNode } & BoxProps> & {
  CardActions: typeof CardActions;
  CardBody: typeof UserCardBody;
  ProfilePicture: typeof UserProfilePicture;
} = ({ children, ...rest }) => {
  const actionChildren = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === CardActions);
  const cardBodyChildren = React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === UserCardBody);
  return (
    <Flex borderRadius={2} flexDirection={'column'} py={2} px={2} bgcolor={'background.paper'} {...rest}>
      {actionChildren}
      {cardBodyChildren}
    </Flex>
  );
};

UserCard.CardActions = CardActions;
UserCard.CardBody = UserCardBody;
UserCard.ProfilePicture = UserProfilePicture;

export default UserCard;
