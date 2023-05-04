import AllPosts from "@/components/posts/all-posts";
import { PostType } from "..";

const DUMMY_POSTS: PostType[] = [
  {
    title: "Next JS 기초1",
    image: "next-js-기초.png",
    excerpt:
      "Next.js는 React 프레임워크입니다. SSR과 풀스택 개발 등 다양한 기능을 지원합니다.",
    date: "2023-05-04",
    slug: "next-js-기초1",
  },
  {
    title: "Next JS 기초2",
    image: "next-js-기초.png",
    excerpt:
      "Next.js는 React 프레임워크입니다. SSR과 풀스택 개발 등 다양한 기능을 지원합니다.",
    date: "2023-05-04",
    slug: "next-js-기초2",
  },
  {
    title: "Next JS 기초3",
    image: "next-js-기초.png",
    excerpt:
      "Next.js는 React 프레임워크입니다. SSR과 풀스택 개발 등 다양한 기능을 지원합니다.",
    date: "2023-05-04",
    slug: "next-js-기초3",
  },
];

const AllPostsPage = () => {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default AllPostsPage;
