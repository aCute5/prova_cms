import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";
import { Slider } from "theme-ui";

const ImageGallery = ({ title, images }) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Slider>
        {images.map((image) => (
          <GatsbyImage image={image.gatsbyImageData} alt={title} />
        ))}
      </Slider>
    </Box>
  );
};
export default ImageGallery;
