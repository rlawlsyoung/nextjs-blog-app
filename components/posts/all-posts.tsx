import PostsGrid from "./posts-grid";
import { PostType } from "@/pages";
import classes from "./all-posts.module.css";

interface Props {
  posts: PostType[];
}

const AllPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
