import React, { PropsWithChildren } from "react";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full max-w-3xl">{children}</main>
      <footer className="w-full max-w-3xl text-center">
        <p className="text-sm">© 2023 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
