import ComponentHeader from './ComponentHeader';

const DocsFooter: React.FC = () => {
  return (
    <ComponentHeader
      title="Source Code"
      subtitle="Didn't find what you were looking for? Checkout the source code and customize it for your needs!"
      titleProps={{
        variant: 'h4',
        color: 'text.primary'
      }}
      rootProps={{ mb: 2 }}
    />
  );
};

export default DocsFooter;
