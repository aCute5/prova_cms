import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Box } from "@theme-ui/components";
const Team = ({ links }) => {
  return (
    <Box>
      {links.map((link) => (
        <GatsbyLink to={link.slug}>{link.title}</GatsbyLink>
      ))}
    </Box>
  );
};
export default Team;
