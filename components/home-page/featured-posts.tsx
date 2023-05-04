import PostsGrid from "../posts/posts-grid";
import { PostType } from "@/pages";
import classes from "./featured-posts.module.css";

interface Props {
  posts: PostType[];
}

const FeaturedPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
