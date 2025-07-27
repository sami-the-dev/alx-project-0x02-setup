import React, { PropsWithChildren } from "react";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow w-full">{children}</main>
      <footer className="w-full  text-center">
        <p className="text-sm">© 2023 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
