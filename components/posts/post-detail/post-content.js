import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const dummy = {
  title: "더미1",
  slug: "getting-started",
  image: "dummy.png",
  excerpt: "dummy1",
  date: "2022-08-28",
  content: "# 첫번째 더미 게시물ㅎ",
};

const PostContent = () => {
  const imgPath = `/image/${dummy.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={dummy.title} image={imgPath} />
    </article>
  );
};

export default PostContent;
