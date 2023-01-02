import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostPageContent({ post }) {
  const { date, title, content, author, categories } = post;
  const haveCategories = Boolean(categories?.nodes?.length);

  return (
    <article>
      <h1>{title}</h1>
      <p className="post-meta">
        <span role="img" aria-label="writing hand">
          ✍️
        </span>{" "}
        {author.node.name} - {formatDate(date)}
      </p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {haveCategories ? <div className="categories-list"></div> : null}
    </article>
  );
}
