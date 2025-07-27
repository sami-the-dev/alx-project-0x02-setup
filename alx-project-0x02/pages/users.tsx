import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import React from "react";

// Component name should be capitalized
const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <p className="text-lg">
        Here you can find all the users registered on the platform.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {users && users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};

// Make sure to export the capitalized component name
export default Users;

// This function works in Next.js pages but the component must be properly named
export async function getStaticProps() {
  try {
    // Fetch users data from an API or database
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
