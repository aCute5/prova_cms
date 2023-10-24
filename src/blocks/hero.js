import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";

const Hero = ({ title, image }) => {
  return (
    <Box>
      <Text>{title}</Text>
      <GatsbyImage image={image} alt={title} />
    </Box>
  );
};
export default Hero;
