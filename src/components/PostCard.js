import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostCard({ post }) {
  const {
    title,
    date,
    slug,
    author: {
      node: { name: authorName }
    },
    featuredImage
  } = post;

  return (
    <div className="post-card">
      <Link to={`/blog/${slug}`}>
        {featuredImage ? (
          <img
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
          />
        ) : null}
        <h3>{title}</h3>
      </Link>
      <div className="metadata">
        <p>
          {authorName} - {formatDate(date)}
        </p>
      </div>
    </div>
  );
}
