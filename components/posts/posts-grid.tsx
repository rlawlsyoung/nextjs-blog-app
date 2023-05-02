import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

interface Props {
  posts: any;
}

const PostsGrid: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostsGrid;
