import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import ProfilePictureDocs from './components/ProfilePictureDocs';

const ProfilePicture: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader title="User Profile Picture" subtitle="A component for showing the user's profile picture" />
      <ProfilePictureDocs />
    </React.Fragment>
  );
};

export default ProfilePicture;
