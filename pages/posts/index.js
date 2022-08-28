import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/posts-util";

const index = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export default index;

export function getStaticProps() {
  const featuredPosts = getAllPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
