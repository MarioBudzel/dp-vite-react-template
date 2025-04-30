import CodeBlock from '@/components/common/CodeBlock';
import DocsBody from '@/pages/Documentation/components/DocsBody';
import DocsSubtitle from '@/pages/Documentation/components/DocsSubtitle';
import DocsTitle from '@/pages/Documentation/components/DocsTitle';
import FileText from '@/pages/Documentation/components/FileText';
import { Box } from '@mui/material';
import React from 'react';

const FrontEnd: React.FC = () => {
  return (
    <Box>
      <DocsTitle>Front-end</DocsTitle>
      <DocsBody mb={2}>There are two types of routes:</DocsBody>
      <DocsBody mb={2} component={'div'}>
        <ul>
          <li>
            <FileText>public</FileText> - can be accessed by anyone
          </li>
          <li>
            <FileText>private</FileText> - users need to be logged in
          </li>
        </ul>
      </DocsBody>
      <DocsBody mb={2}>Files:</DocsBody>
      <DocsBody mb={2} component={'div'}>
        <ul>
          <li>
            <FileText>web/src/routes/publicRoutes.tsx</FileText> - public
          </li>
          <li>
            <FileText>web/src/routes/privateRoutes.tsx</FileText> - private
          </li>
        </ul>
      </DocsBody>
      <DocsSubtitle>1. Creating Page Component</DocsSubtitle>
      <DocsBody mb={2}>
        Create a new directory inside <FileText>./web/src/pages</FileText> directory. Then create your <FileText>index.tsx</FileText> file,
        containing your page.
      </DocsBody>
      <CodeBlock language="tsx" rounded>
        {`const Example: React.FC = () => {
  return <></>
}

export default Example`}
      </CodeBlock>
      <DocsSubtitle>2. Create new route</DocsSubtitle>
      <CodeBlock language="javascript" rounded>
        {`// inside web/src/routes/publicRoutes.tsx
// or web/src/routes/privateRoutes.tsx

...
{
  path: 'path',
  element: <Example />
},
...

`}
      </CodeBlock>
      <DocsSubtitle>3. Nesting routes</DocsSubtitle>
      <DocsBody mb={2}>
        Create a layout component inside <FileText>./web/src/layout</FileText> directory. Use <FileText>{`<Outlet />`}</FileText> component.
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`const LayoutExample: React.FC = () => {
  return <Outlet />
}

export default LayoutExample`}
      </CodeBlock>
      <DocsBody my={2}>Create the nested route:</DocsBody>
      <CodeBlock language="javascript" rounded>
        {`// inside web/src/routes/publicRoutes.tsx
// or web/src/routes/privateRoutes.tsx

...
{
  path: 'path',
  element: <LayoutExample />,
  children: [
    {
      path: 'nestedPath',
      element: <Example />
    }
  ]
},
...

`}
      </CodeBlock>
    </Box>
  );
};

export default FrontEnd;
