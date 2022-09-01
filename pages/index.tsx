import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../utils/posts-util";

const index = ({ posts }) => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};

export default index;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
