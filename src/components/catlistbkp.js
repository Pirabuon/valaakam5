import React from "react";
import { gql, useQuery } from "@apollo/client";

const CATEGORY_POSTS_QUERY = gql`
  query CategoryPosts($categoryId: Int!) {
    posts(where: { categoryId: $categoryId }) {
      edges {
        nodes {
          databaseId
          title
          date
          slug
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default function CategoryPosts({ categoryId }) {
  const { loading, error, data } = useQuery(CATEGORY_POSTS_QUERY, {
    variables: { categoryId }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.posts.edges.map((post) => (
        <div key={post.node.id}>
          <h2>{post.node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
          <img src={post.node.featuredImage.sourceUrl} alt="" />
        </div>
      ))}
    </div>
  );
}
