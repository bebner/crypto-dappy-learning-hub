import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';

export const query = graphql`
  query($pathSlug: String!, $language: String!, $mdxLang: String!) {
    mdx(
        frontmatter: { path: { eq: $pathSlug } }
        fields: { mdxLang: { eq: $mdxLang } }
      ) {
      frontmatter {
        title
        path
      }
      body
    }
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Post = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default Post;