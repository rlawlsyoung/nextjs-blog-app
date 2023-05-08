import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/helpers/posts-util";
import { PostType } from "..";

interface Props {
  post: PostType;
}

const PostDetailPage: React.FC<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const slug = params?.slug;

  console.log(slug);

  const postData = getPostData(slug);

  return {
    props: { post: postData },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
