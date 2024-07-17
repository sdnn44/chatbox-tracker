import React, { useRef } from "react";
import { motion } from "framer-motion";
import { replaceEmoticons } from "../../data/emoticon-map";

const Message = ({ messages, senderName, index, jumpToRef }) => {
  const ref = useRef();
  const processedMessage = replaceEmoticons(messages.message);
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.1, delay: index * 0.1 }}
      className="border-t-[1px] border-[#571464] h-16 md:h-12 w-full flex md:p-2 px-2 md:px-5 justify-between items-center"
      ref={messages.id === jumpToRef?.current?.id ? jumpToRef : ref}
    >
      <div className="flex flex-row items-center gap-3 md:gap-5 pt-7 w-full">
        <img
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          src={messages.img}
          alt="avatar"
        />
        <div className="flex flex-col gap-1 items-start w-full">
          <div className="font-semibold text-[14px] md:text-base flex w-full justify-between">
            {senderName}
            <span className="flex text-[10px] font-normal md:text-[12px]">
              {messages.date}
            </span>
          </div>
          <div
            className="text-[11px] md:text-[12px] text-left"
            dangerouslySetInnerHTML={{ __html: processedMessage }}
          >{/* {messages.message} */}</div>
        </div>
      </div>
      {/* <div className="flex text-[10px] md:text-[15px]">{messages.date}</div> */}
    </motion.div>
  );
};

export default Message;
