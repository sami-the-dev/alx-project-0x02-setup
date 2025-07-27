import React from "react";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
const posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div className="w-full">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <p className="text-lg">
        Here you can find all the posts related to various topics.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            userId={post.userId}
            onClick={() => alert(`No more details available for ${post.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // Fetch posts data from an API or database
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const postsData = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts: postsData,
    },
  };
};

export default posts;
