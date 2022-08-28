import React from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}></PostItem>
      ))}
    </ul>
  );
};

export default PostsGrid;
