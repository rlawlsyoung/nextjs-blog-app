import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PostType } from "@/pages";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string | string[] | undefined) => {
  const postSlug = postIdentifier;
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const { title, image, excerpt, date, isFeatured } = data;

  const postData: PostType = {
    slug: postSlug,
    content: content,
    title,
    image,
    excerpt,
    date,
    isFeatured,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile.replace(/\.md$/, ""));
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
