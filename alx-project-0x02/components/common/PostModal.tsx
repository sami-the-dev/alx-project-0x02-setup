import { Post, PostModalProps } from "@/interfaces";
import React from "react";

const PostModal: React.FC<PostModalProps> = ({ onSubmit }) => {
  const [Title, setTitle] = React.useState("");
  const [Content, setContent] = React.useState("");
  const handleAddNewPost = () => {
    if (Title.trim() === "" || Content.trim() === "") {
      alert("Title and content cannot be empty.");
      return;
    }
    const newPost: Post = {
      title: Title,
      content: Content,
      createdAt: new Date().toISOString(),
    };
    onSubmit(newPost);
    setTitle("");
    setContent("");
    alert("Post created successfully!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 rounded-lg">
      <form className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Create Post</h2>
        <input
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Title"
          autoFocus
        />
        <textarea
          value={Content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="What's on your mind?"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleAddNewPost}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostModal;
