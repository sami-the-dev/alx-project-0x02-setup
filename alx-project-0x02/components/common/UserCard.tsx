import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border-2 border-purple-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-indigo-100 to-purple-100">
      <h2 className="font-bold text-2xl text-purple-600 mb-3 hover:text-purple-800 transition-colors">
        {user.name}
      </h2>
      <p className="text-gray-700 hover:text-indigo-600 transition-colors">
        <span className="font-semibold">📧 Email:</span> {user.email}
      </p>
      <div className="text-gray-700 hover:text-indigo-600 transition-colors space-y-1">
        <p className="font-semibold">🏠 Address Details:</p>
        <div className="ml-4 space-y-1">
          <p>🛣️ {user.address.street}</p>
          <p>🌆 {user.address.city}</p>
          <p>📮 {user.address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
