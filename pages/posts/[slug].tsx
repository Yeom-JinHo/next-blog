import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../utils/posts-util";

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export default PostDetailPage;

export function getStaticProps({ params }) {
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
  };
}

export function getStaticPaths() {
  const postsFilenames = getPostsFiles();

  const slugs = postsFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
