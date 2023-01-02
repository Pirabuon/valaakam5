import React from "react";
import { gql, useQuery } from "@apollo/client";
import PostCard from "../PostCard";
import LoadPostCard from "../loadme/LoadPostCard";

const CATEGORY_POSTS_QUERY = gql`
  query CategoryPosts($categoryId: Int!, $first: Int, $after: String) {
    posts(where: { categoryId: $categoryId }, first: $first, after: $after) {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default function CategoryPosts({ categoryId }) {
  const { loading, error, data, fetchMore } = useQuery(CATEGORY_POSTS_QUERY, {
    variables: { categoryId: 816, first: 10 }
  });

  if (loading)
    return (
      <div>
        <LoadPostCard />
        <LoadPostCard />
        <LoadPostCard />
      </div>
    );
  if (error) return <p>ஏதோ தவறு, மன்னிக்கவும். :( </p>;

  const postsFound = Boolean(data?.posts.nodes.length);
  if (!postsFound) {
    return <p>தொடர்புடைய பதிவுகள் இல்லை...</p>;
  }

  return (
    <div className="posts-list">
      {data.posts.nodes.map((post) => (
        <PostCard key={post.databaseId} post={post} />
      ))}
      {data.posts.pageInfo.hasNextPage && (
        <button
          className="btnA"
          onClick={() =>
            fetchMore({
              variables: {
                after: data.posts.pageInfo.endCursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.posts.nodes;
                const pageInfo = fetchMoreResult.posts.pageInfo;

                return newEdges.length
                  ? {
                      posts: {
                        __typename: previousResult.posts.__typename,
                        nodes: [...previousResult.posts.nodes, ...newEdges],
                        pageInfo
                      }
                    }
                  : previousResult;
              }
            })
          }
        >
          மேலும் ...
        </button>
      )}
    </div>
  );
}
