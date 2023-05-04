import PostItem from "./post-item";
import { PostType } from "@/pages";
import classes from "./posts-grid.module.css";

interface Props {
  posts: PostType[];
}

const PostsGrid: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: PostType) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
