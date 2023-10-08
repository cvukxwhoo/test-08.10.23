import React from "react";
import Header from "../DefaultLayout/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default DefaultLayout;
