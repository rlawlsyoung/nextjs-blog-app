import AllPosts from "@/components/posts/all-posts";
import { PostType } from "..";
import { getAllPosts } from "@/helpers/posts-util";
import { GetStaticProps } from "next";

interface Props {
  posts: PostType[];
}

const AllPostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <>
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
