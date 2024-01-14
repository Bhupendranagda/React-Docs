import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      className="w-60 h-72 rounded-[40px] px-8 py-10 bg-zinc-900/90 text-white p-5 overflow-hidden relative"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <MdDownload size=".7em" color="#fff" />
            ) : (
              <IoIosCloseCircleOutline size=".7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4  flex items-center justify-center bg-${data.tag.tagColor}-600`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
