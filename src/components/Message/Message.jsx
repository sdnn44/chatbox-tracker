import React, { useRef } from "react";
const Message = ({ messages, senderName, jumpToRef }) => {
  const ref = useRef();
  const isEmote = (str) => {
    const regex =
      /<img src="https:\/\/strefaskilla\.pl\/uploads\/emoticons\/[^"]+\.png" loading="lazy" title=":tf:" alt=":tf:" data-emoticon="true">/;
    return regex.test(str);
  };

  return (
    <div
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
          {isEmote(messages.message) ? (
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: messages.message }}
            />
          ) : (
            <div className="text-[11px] md:text-[12px] text-left">
              {messages.message}
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex text-[10px] md:text-[15px]">{messages.date}</div> */}
    </div>
  );
};

export default Message;
