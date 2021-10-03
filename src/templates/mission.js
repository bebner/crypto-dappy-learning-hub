import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

export const query = graphql`
  query($mdxLang: String!, $pathSlug: String!) {
    mdx(
      frontmatter: { path: { eq: $pathSlug } }
      fields: { lang: { eq: $mdxLang } }
    ) {
      frontmatter {
        title
        path
      }
      body
    }
  }
`;

const Post = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
};

export default Post;