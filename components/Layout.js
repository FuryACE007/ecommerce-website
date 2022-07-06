import React from "react";

const Layout = (props) => {
  return (
    <>
      Navbar
      <main className="lg:px-[180px] md:px-[80px] sm:px-[30px] min-h-screen py-5">{props.children}</main>
      Footer
    </>
  );
};

export default Layout;
