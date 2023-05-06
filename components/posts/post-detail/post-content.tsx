import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { PostType } from "@/pages";

interface Props {
  post: PostType;
}

const PostContent: React.FC<Props> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image: any) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={900}
          height={450}
        />
      );
    },

    code(code: any) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return <Prism style={atomDark} language={language} children={children} />;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />{" "}
      <ReactMarkdown components={customRenderers}>
        {post.content!}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
