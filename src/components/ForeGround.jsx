import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
const ForeGround = () => {
  const data = [
    {
      desc: "lorem adasd ads d fsdd sdwe awedsa wed a sdsd asdsdasdasd",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem adasd ads d fsdd sdwe awedsa wed a sdsd asdsdasdasd",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem adasd ads d fsdd sdwe awedsa wed a sdsd asdsdasdasd",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="w-full top-0 left-0 z-[3] h-full fixed gap-5 flex-wrap flex p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default ForeGround;
