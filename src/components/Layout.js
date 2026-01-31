import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark sm:px-8 p-10 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
