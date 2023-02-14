import React, { useState } from "react";
import CustomModal from "./Custm";
import './Dialog.css'


export default function Dialog() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="w-5 h-2 flex items-center justify-center">
        <button
          className="py-0 px-0 text-white"
          onClick={() => setShowModal(true)}
        >
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="currentColor" className="w-7 h-7">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
</svg>


        </button>
      </div>
      <CustomModal visible={showModal} onClose={() => setShowModal(false)}>
        <div className=" w-65 p-2 rounded-2xl bg-slate-600 ">
          <h1 className=" titre font-bold text-3xl text-gray-200 px-8 py-1 align-middle">
            Open Space <sup>+</sup>  <sub className=" text-slate-100 text-sm font-bold copy"><sup className="text-white">By</sup> Ferchichi Ghaith , Hammouda Ahmed</sub>
          </h1>
          <p className=" inform py-1 text-gray-100 ">
          
          Is an AI language model using  OpenAI API that generates human-like text based on deep learning algorithms <br />
           and a large corpus of text data.
           It is used to develop conversational AI systems <br /> that can understand and respond to natural language inputs. <br />
         
          </p>
          
          
        </div>
      </CustomModal>
    </>
  );
}