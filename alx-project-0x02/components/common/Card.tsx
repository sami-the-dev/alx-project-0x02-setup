import { CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
