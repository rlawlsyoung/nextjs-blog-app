import Head from "next/head";
import { GetStaticProps } from "next";

import AllPosts from "@/components/posts/all-posts";
import { PostType } from "..";
import { getAllPosts } from "@/helpers/posts-util";

interface Props {
  posts: PostType[];
}

const AllPostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="포스트 전체 보기 페이지입니다." />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
};

export default AllPostsPage;
