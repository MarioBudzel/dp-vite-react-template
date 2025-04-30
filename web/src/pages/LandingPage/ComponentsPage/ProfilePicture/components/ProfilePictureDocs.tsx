import { Flex } from '@/components/common';
import CodeBlock from '@/components/common/CodeBlock';
import UserProfilePicture from '@/components/ui/UserCard/UserProfilePicture';
import { Box } from '@mui/material';
import ComponentHeader from '../../components/ComponentHeader';
import ExampleWrapper from '../../components/ExampleWrapper';
import PropHandler from '../../components/PropHandler';
import { userProfilePictureProps } from '../../data/props';

const ProfilePictureDocs: React.FC = () => {
  return (
    <>
      <Flex flexDirection={'column'} width={'100%'} gap={5}>
        <Box maxWidth={'100%'}>
          <ComponentHeader
            title="Import"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          <CodeBlock rounded>{`import UserProfilePicture from '@/components/ui/UserCard/UserProfilePicture';`}</CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Example"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          <ExampleWrapper>
            <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
              <Box>
                <UserProfilePicture
                  imageUrl={'https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg'}
                  size="small"
                  useExternal
                />
              </Box>
              <UserProfilePicture
                imageUrl={'https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg'}
                useExternal
              />
            </Flex>
          </ExampleWrapper>
          <CodeBlock>
            {`import UserProfilePicture from '@/components/ui/UserCard/UserProfilePicture';
import { Flex } from '@/components/common';

const Example = () => {
  return (
    <Flex gap={1} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
      <Box>
        <UserProfilePicture
          imageUrl={'https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg'}
          size="small"
          useExternal
        />
      </Box>
      <UserProfilePicture
        imageUrl={'https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg'}
        useExternal
      />
    </Flex>
  )
}

export default Example`}
          </CodeBlock>
        </Box>
        <Box>
          <ComponentHeader
            title="Props"
            subtitle="Available props for UserProfilePicture component"
            titleProps={{
              variant: 'h4',
              color: 'text.primary'
            }}
            rootProps={{ mb: 2 }}
          />
          {userProfilePictureProps.map((prop, index) => (
            <PropHandler {...prop} key={index} />
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ProfilePictureDocs;
