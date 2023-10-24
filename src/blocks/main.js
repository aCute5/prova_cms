import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";
import { Heading } from "theme-ui";
import { Paragraph } from "theme-ui";

const Main = ({ title, body }) => {
  return (
    <Box>
      <Heading>{title}</Heading>
      <Paragraph>{body}</Paragraph>
    </Box>
  );
};
export default Main;
