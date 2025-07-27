import Button from "@/components/common/Button";
import React from "react";

const about = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        Welcome to our website! We are dedicated to providing the best content
        and user experience. Our team works hard to ensure that you find what
        you're looking for.
      </p>
      <p className="mt-4">
        If you have any questions or feedback, feel free to reach out to us!
      </p>
      <p className="mt-4">
        Thank you for visiting our site, and we hope you enjoy your stay!
      </p>
      <Button shape="rounded-md" size="medium">
        Learn More
      </Button>
      <Button shape="rounded-full" size="large">
        Learn More
      </Button>
      <Button shape="rounded-sm" size="small">
        Learn More
      </Button>
    </div>
  );
};

export default about;
