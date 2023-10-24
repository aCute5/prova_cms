import * as React from "react";
import { graphql } from "gatsby";
import { Box } from "@theme-ui/components";
import Hero from "../blocks/hero";
import Main from "../blocks/main";
import PageCollection from "../blocks/pageCollection";
import Article from "../blocks/article";
import ImageGallery from "../blocks/imageGallery";
import Footer from "../blocks/footer";

const Page = ({ data: { page } }) => {
  console.log(page);
  return (
    <Box>
      {page.content.map((block) => {
        {
          block.model.apiKey === "hero" && (
            <Hero title={block.title} image={block.image.gatsbyImageData} />
          );
        }
        {
          block.model.apiKey === "main" && (
            <Main title={block.title} body={block.body} />
          );
        }
        {
          block.model.apiKey === "page_collection" && (
            <PageCollection title={block.title} links={block.links} />
          );
        }
        {
          block.model.apiKey === "article" && (
            <Article
              title={block.title}
              body={block.body}
              links={block.links}
            />
          );
        }
        {
          block.model.apiKey === "image_gallery" && (
            <ImageGallery title={block.title} images={block.images} />
          );
        }
        {
          block.model.apiKey === "footer" && <Footer body={block.body} />;
        }
      })}
    </Box>
  );
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    page: datoCmsPage(slug: { eq: $slug }) {
      title
      slug
      content {
        ... on DatoCmsFooter {
          id
          body
          model {
            apiKey
          }
        }
        ... on DatoCmsHero {
          title
          image {
            gatsbyImageData
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsMain {
          id
          title
          body
          model {
            apiKey
          }
        }
        ... on DatoCmsImageGallery {
          id
          title
          images {
            gatsbyImageData
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsPageCollection {
          id
          title
          links {
            title
          }
          model {
            apiKey
          }
        }
      }
    }
  }
`;
