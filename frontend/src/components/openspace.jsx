import React, { useState } from "react";
import Openspacechat from "./openspacechat";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import { useMutation } from "react-query";
import { fetchResponse } from "./api";


export default function Openspace() {
  const [showModal, setShowModal] = useState(false);
  const [chat, setChat] = useState([]);
  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };
  return (
    <>
      <div className="w-5 h-2 flex items-center justify-center">
        <button
          className="py-4 px-4 text-yellow-500"
          onClick={() => setShowModal(true)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
  <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
</svg>

        </button>
      </div>

      <Openspacechat visible={showModal} onClose={() => setShowModal(false)}>
      <div className=" bg-slate-500 h-4/5 sm:w-3/12  lg:w-auto py-6 relative sm:px-16 px-12 text-slate-100 overflow-hidden flex flex-col justify-between  align-middle rounded-xl">
      {/* gradients */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      {/* header */}
      <div className=" bg-slate-100 font-bold  text-2xl text-center mb-3 text-slate-900 rounded-2xl border px-0 py-2">
       Can i help you ?
      </div>

      {/* body */}
      <div
        className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "
      >
        <ChatBody chat={chat} />
      </div>

      {/* input */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>
    </div>
      </Openspacechat>
    </>
  );
}