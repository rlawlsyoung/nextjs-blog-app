import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/helpers/posts-util";
import { GetStaticPaths, GetStaticProps } from "next";

const PostDetailPage = ({ slug }: { slug: string }) => {
  console.log(slug);

  return <PostContent />;
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const slug = params?.slug;

  const postData = getPostData(slug);

  return {
    props: { post: postData },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: false,
  };
};

export default PostDetailPage;
