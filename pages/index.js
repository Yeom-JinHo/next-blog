import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
const dummy = [
  {
    title: "더미1",
    slug: "getting-started",
    image: "dummy.png",
    excerpt: "dummy1",
    date: "2022-08-28",
  },
  {
    title: "더미2",
    slug: "getting-started2",
    image: "dummy.png",
    excerpt: "dummy2",
    date: "2022-08-28",
  },
  {
    title: "더미3",
    slug: "getting-started3",
    image: "dummy.png",
    excerpt: "dummy3",
    date: "2022-08-28",
  },
  {
    title: "더미4",
    slug: "getting-started4",
    image: "dummy.png",
    excerpt: "dummy4",
    date: "2022-08-28",
  },
];

const index = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={dummy} />
    </div>
  );
};

export default index;
