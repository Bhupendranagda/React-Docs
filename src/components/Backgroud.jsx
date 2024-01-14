import React from "react";

const Backgroud = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className=" absolute top-[5%] w-full py-10 text-zinc-700 font-semibold flex justify-center text-xl ">
          Documents
        </div>
        <h1
          className="text-[13vw] tracking-tighter leading-none 
      left-1/2 absolute top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900
      "
        >
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Backgroud;
