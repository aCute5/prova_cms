import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";
import { Button } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const Hero = ({ title, image }) => {
  return (
    <Box>
      <Text
        sx={{
          color: "primary",
          fontSize: "4rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: "1rem",
          mb: "1rem",
        }}
      >
        {title}
      </Text>
      <GatsbyImage image={image} alt={title} />
    </Box>
  );
};
export default Hero;
