import Card from "@/components/common/Card";
import React from "react";

const home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Card 1" content="This is the first card content." />
        <Card title="Card 2" content="This is the second card content." />
        <Card title="Card 3" content="This is the third card content." />
      </div>
    </div>
  );
};

export default home;
