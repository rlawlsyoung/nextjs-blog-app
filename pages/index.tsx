import { GetStaticProps } from "next";
import Head from "next/head";

import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

import { getFeaturedPosts } from "@/helpers/posts-util";

export interface PostType {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string | string[] | undefined;
  content?: string;
  isFeatured?: boolean;
}

interface Props {
  posts: PostType[];
}

const HomePage: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Kim's Blog</title>
        <meta
          name="description"
          content="프론트엔드 개발자 김진영의 개발 블로그입니다."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
