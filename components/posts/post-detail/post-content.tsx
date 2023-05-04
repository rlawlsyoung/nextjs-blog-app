import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Next JS 기초1",
  image: "next-js-기초.png",
  excerpt:
    "Next.js는 React 프레임워크입니다. SSR과 풀스택 개발 등 다양한 기능을 지원합니다.",
  date: "2023-05-04",
  slug: "next-js-기초1",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
