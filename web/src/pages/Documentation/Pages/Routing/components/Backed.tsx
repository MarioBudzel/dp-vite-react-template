import CodeBlock from '@/components/common/CodeBlock';
import DocsBody from '@/pages/Documentation/components/DocsBody';
import DocsSubtitle from '@/pages/Documentation/components/DocsSubtitle';
import DocsTitle from '@/pages/Documentation/components/DocsTitle';
import FileText from '@/pages/Documentation/components/FileText';
import { Box } from '@mui/material';
import React from 'react';

const Backed: React.FC = () => {
  return (
    <Box>
      <DocsTitle>Back-end</DocsTitle>
      <DocsBody mb={2}>To create a new route on the server, you need to follow these steps:</DocsBody>
      <DocsSubtitle>1. Creating the controller</DocsSubtitle>
      <DocsBody mb={2}>
        First navigate to <FileText>./api/src/controllers</FileText>. Once there, create a controller file:
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`touch <route_name>Controller.js`}
      </CodeBlock>
      <DocsBody my={2}>Create a route handler method:</DocsBody>
      <CodeBlock language="javascript" rounded>
        {`exports.<method_name> = async (req, res) => {
  try {
    return res.status(200).send();
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json();
  }
};`}
      </CodeBlock>
      <DocsSubtitle>2. Creating the Router object</DocsSubtitle>
      <DocsBody mb={2}>
        Navigate to <FileText>./api/src/routes</FileText>. Once there, create a routes file:
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`touch <route_name>Routes.js`}
      </CodeBlock>
      <DocsBody my={2}>Create the routes and export the router:</DocsBody>
      <CodeBlock language="javascript" rounded>
        {`const express = require("express");
const {
<route_method>
} = require("../controllers/<route_name>Controller");

const router = express.Router();

router.post("/<route>", <route_method>);

// router.get("<route>", <route_method>);

module.exports = router;`}
      </CodeBlock>
      <DocsSubtitle>3. Assign the route</DocsSubtitle>
      <DocsBody mb={2}>
        Navigate to <FileText>./api/app.js</FileText>. Once there, assign the created routes file:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`app.use("/<parent_route>", require("./src/routes/<route_name>Routes"));`}
      </CodeBlock>
      <DocsSubtitle>4. Create a front-end query</DocsSubtitle>
      <DocsBody mb={2}>
        Navigate to <FileText>./web/src/store/api/intex.ts</FileText>. Once there, create a new query (GET)/mutation (POST):
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`// mutation
<mutation_name>: builder.mutation({
  query: (data) => ({
    url: '/<parent_route>/<route_name>',
    method: 'POST',
    body: data
  }),
})

// query
<query_name>: builder.query({
  query: (data) => ({
    url: '/<parent_route>/<route_name>',
    method: 'GET',
    body: data
  }),
})`}
      </CodeBlock>
      <DocsBody my={2}>Export the created mutation / query in the export at the end of the file.</DocsBody>
    </Box>
  );
};

export default Backed;
