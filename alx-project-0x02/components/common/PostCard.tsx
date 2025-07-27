import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ title, content, userId, onClick }) => {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{content}</p>
      {userId && (
        <p className="mt-2 text-sm text-gray-500">User ID: {userId}</p>
      )}
      {onClick && (
        <button
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default PostCard;
