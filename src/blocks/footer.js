import React from "react";
import { Box, Text } from "@theme-ui/components";
import { Link as GatasbyLink } from "gatsby";
import { Button } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const Footer = ({ body }) => {
  return (
    <Box>
      <Text dangerouslySetInnerHTML={{ __html: body }}></Text>
    </Box>
  );
};

export default Footer;
