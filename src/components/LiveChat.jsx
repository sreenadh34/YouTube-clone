import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addMessage }from "../utils/chatSlice";
import ChatMessage from './ChatMessage';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(()=> {
        //API Polling
        console.log("API polling");
        dispatch(addMessage({
          name:generateRandomName(),
          message:makeRandomMessage(20),
        }))
    },500);
    return () => clearInterval(i);
  },[]);

  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    <div>
    { // Dont use indexes as key
      chatMessages.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message} />
        ))
    }
    </div>
    </div>

    <div className='w-full p-2 ml-2 border border-black'>
      <input className='w-[275px]' type="text" />
      <button className='px-2 mx-2 bg-green-100'>Send</button>
    </div>
   
    </>
  );
};

export default LiveChat; 