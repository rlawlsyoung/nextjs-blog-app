import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PostType } from "@/pages";

const postsDirectory = path.join(process.cwd(), "content", "posts");

const getPostData = (fileName: string) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // 파일 확장자명 삭제
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
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
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
