import React from "react";

const Layout = (props) => {
  return (
    <>
      Navbar
      <div className="lg:px-[180px] md:px-[80px] sm:px-[30px] w-[90rem] min-h-screen mx-auto py-5">
        {props.children}
      </div>
      Footer
    </>
  );
};

export default Layout;
