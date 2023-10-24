import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";
import { Slider } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const Article = ({ title, body, links }) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Text>{body}</Text>
      {links.map((link) => (
        <GatsbyLink to={link.slug}>{link.title}</GatsbyLink>
      ))}
    </Box>
  );
};

export default Article;
