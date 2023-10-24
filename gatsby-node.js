// context: { id: article.id }, = il context serve a Gatsby per la generazione programmatiche delle pagine
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query CreatePageQuery {
      pages: allDatoCmsPage {
        nodes {
          slug
          title
          id
        }
      }
    }
  `);
  data.pages.nodes.forEach((page) => {
    const slug = page.slug;
    actions.createPage({
      path: slug === "home" ? "/" : slug,
      component: require.resolve("./src/templates/page.js"),
      context: { id: page.id, slug: slug, title: "ciao" },
    });
  });
};
// context: { id: article.id }, = il context serve a Gatsby per la generazione programmatiche delle pagine
