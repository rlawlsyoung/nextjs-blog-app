import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

export interface PostType {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}

interface Props {
  posts: PostType[];
}

const PostsGrid: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: PostType) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
