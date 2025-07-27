import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { Post } from "@/interfaces";
import Header from "@/components/layout/Header";
import React from "react";

const Posts = [
  { title: "First Post", content: "This is the content of the first post." },
  { title: "Second Post", content: "This is the content of the second post." },
  { title: "Third Post", content: "This is the content of the third post." },
];

const Home = () => {
  const [showModal, setShowModal] = React.useState(false);

  const onSubmit = (newPost: Post) => {
    Posts.push(newPost);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4 ">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add New Post
      </button>
      {showModal && <PostModal onSubmit={onSubmit} />}
    </div>
  );
};

export default Home;
