import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "@theme-ui/components";
import { Slider } from "theme-ui";

const ImageGallery = ({ title, images }) => {
  return (
    <Box>
      <h1>Questa è la gallery </h1>
      <Text>{title}</Text>
      <Slider></Slider>
      {images.map((image) => {
        return (
          <Box>
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={image.alt}
              key={image.id}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ImageGallery;
