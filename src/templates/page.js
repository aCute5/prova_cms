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
        if (block.model) {
          if (block.model.apiKey === "hero") {
            return (
              <Hero title={block.title} image={block.image.gatsbyImageData} />
            );
          }
          if (block.model.apiKey === "main") {
            return <Main title={block.title} body={block.body} />;
          }
          if (block.model.apiKey === "page_collection") {
            return <PageCollection title={block.title} links={block.links} />;
          }
          if (block.model.apiKey === "article") {
            return (
              <Article
                title={block.title}
                body={block.body}
                links={block.links}
              />
            );
          }
          if (block.model.apiKey === "image_gallery") {
            return <ImageGallery title={block.title} images={block.images} />;
          }
          if (block.model.apiKey === "footer") {
            return <Footer body={block.body} />;
          }
        }
        // Se block.model non esiste o non ha una apiKey valida, restituisci null.
        return null;
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
            gatsbyImageData(width: 800, layout: FIXED)
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
            gatsbyImageData(width: 400, layout: FIXED)
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
