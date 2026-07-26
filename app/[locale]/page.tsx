import React from "react";
import Sections from "./components/main/Sections";
import Bg from "./components/main/Bg";

const Page = () => {
  return (
    <div className="p-10 relative z-10">
      <Bg />
      <Sections />
    </div>
  );
};

export default Page;
