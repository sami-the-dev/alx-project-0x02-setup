import React from "react";
import Header from "@/components/layout/Header";
const posts = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <p className="text-lg">
        Here you can find all the posts related to various topics.
      </p>
    </div>
  );
};

export default posts;
