import { Geist, Geist_Mono } from "next/font/google";
import PostModal from "@/components/common/PostModal";

export default function Home() {
  return (
    <div className="mx-20 my-4 flex flex-col">
      <p className="text-lg text-center">
        This is a simple Next.js project setup with a custom layout and fonts.
      </p>
    </div>
  );
}
