import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";
import { Heading } from "theme-ui";
import { Paragraph } from "theme-ui";

const Main = ({ title, body }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: 256,
      }}
    >
      <Heading
        as="h1"
        sx={{
          fontSize: [3, 4, 5],
          fontVariant: "small-caps",
          py: 2,
        }}
      >
        {title}
      </Heading>
      <Paragraph dangerouslySetInnerHTML={{ __html: body }}></Paragraph>
    </Box>
  );
};
export default Main;
