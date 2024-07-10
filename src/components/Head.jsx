import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/contants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch =useDispatch();
      
  useEffect(() => {
   const timer = setTimeout(() => { 
    if(searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    } else{
      getSearchSugsestions()
    }
    }
    ,200);
   return () => {
    clearTimeout(timer);
   }
  },[searchQuery]);
    
  const getSearchSugsestions = async () =>{
    const data =await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json =await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1],
    })
   );
  };

const toggleMenuHandler = () => {
  dispatch(toggleMenu());
};
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer" 
        alt="menu" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Ks9HQlPD-Rpraa6krZtrX2yleg-hXwfQ&s"
        />
        <a href='/'>
        <img 
        className="h-8 mx-2"
        alt="youtube-logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s" 
         />
         </a>
      </div>
      <div className='col-span-10 px-10'>
        <div>
        <input 
           className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
           type="text"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
           onFocus={()=>setShowSuggestions(true)}
           onBlur={()=>setShowSuggestions(false)}
           />
        <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100">
        🔍
        </button>
        </div>
        {showSuggestions && (
          <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border-gray-100'>
          <ul>
            {suggestions.map((s) => (<li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍{s}</li>
           ) )}
          </ul>
        </div>
        )}
      </div>
      <div className='col-span-1'>
        <img 
        className="h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  )
}
export default Head;
