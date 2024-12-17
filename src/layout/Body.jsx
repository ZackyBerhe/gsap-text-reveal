import React from "react";

const Body = ({ children }) => {
  return (
    <>
      <div className="h-full w-full bg-[#22223B] text-primary p-10">
        {children}
      </div>
    </>
  );
};

export default Body;
