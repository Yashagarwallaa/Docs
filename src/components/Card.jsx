import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";

function Card() {
  return (
    <div className='relative w-[12rem] h-[16rem] bg-black rounded-[1.2rem] text-white px-3 py-5 overflow-hidden'>
        <IoDocumentText />
        <p className='py-4 text-[0.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam excepturi corrupti culpa?</p>
        <div className='footer  absolute w-full text-sm bottom-0 left-0 h-[4.5rem] ' >
            <div className='flex py-2 px-3  items-center justify-between text-yellow-900 mb-1'>
                <h5>0.3 mb</h5 >
             <span className='rounded-full flex items-center justify-center'><MdDownloadForOffline size ="1.2em"/></span>
            </div>
            <div className='tag bg-green-600 w-full h-[2rem] flex items-center justify-center '>
              <h4 className='text-sm font-semibold'>Download Now </h4>
            </div>
        </div>
    </div>
  )
}

export default Card