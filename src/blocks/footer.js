import React from "react";
import { Box, Text } from "@theme-ui/components";
import { Link as GatasbyLink } from "gatsby";

const Footer = ({ title, links }) => {
  return (
    <Box>
      <Text>{title}</Text>
      {links.map((link) => (
        <GatasbyLink to={link.slug}>{link.title}</GatasbyLink>
      ))}
    </Box>
  );
};

export default Footer;
