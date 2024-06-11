import React, { useRef } from "react";

const Message = ({ messages, senderName, jumpToRef }) => {
  const ref = useRef();
  const isEmote = (str) => {
    const regex =
      /<img src="https:\/\/strefaskilla\.pl\/uploads\/emoticons\/[^"]+\.png" loading="lazy" title=":tf:" alt=":tf:" data-emoticon="true">/;
    console.log(regex.test(str));
    return regex.test(str);
  };
  return (
    <div
      className="border-t-2 border-[#571464] h-12 w-full flex p-2 justify-between items-center"
      ref={messages.id === jumpToRef?.current?.id ? jumpToRef : ref}
    >
      <div className="flex flex-row items-center gap-5 pt-4">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src={messages.img}
            alt="avatar"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div>{senderName}</div>
          {isEmote(messages.message) ? (
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: messages.message }}
            />
          ) : (
            <div className="text-sm">{messages.message}</div>
          )}
        </div>
      </div>
      <div className="flex">{messages.date}</div>
    </div>
  );
};

export default Message;
