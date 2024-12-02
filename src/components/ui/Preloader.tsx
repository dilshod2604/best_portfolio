import React from "react";
import { Spin } from "antd";

const Preloader = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-screen
    "
    >
      <Spin tip="loading" size="large" />;
    </div>
  );
};

export default Preloader;
