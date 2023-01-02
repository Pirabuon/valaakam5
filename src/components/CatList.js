import React from "react";
import { gql, useQuery } from "@apollo/client";
import PostCard from "../components/PostCard";

const CATEGORY_POSTS_QUERY = gql`
  query CategoryPosts($categoryId: Int!) {
    posts(where: { categoryId: $categoryId }) {
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
`;

export default function CategoryPosts({ categoryId }) {
  const { loading, error, data } = useQuery(CATEGORY_POSTS_QUERY, {
    variables: { categoryId: 32 }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="posts-list">
      {data.posts.nodes.map((post) => (
        <PostCard key={post.databaseId} post={post} />
      ))}
    </div>
  );
}
