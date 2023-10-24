import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";
import { Link as GatasbyLink } from "gatsby";

const PageCollection = ({ title, links }) => {
  return (
    <Box>
      <Text>{title}</Text>
      {links.map((link) => (
        <GatasbyLink to={link.slug}>{link.title}</GatasbyLink>
      ))}
    </Box>
  );
};

export default PageCollection;
