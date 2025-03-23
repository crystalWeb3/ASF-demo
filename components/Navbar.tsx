'use client'
import React, { useState } from 'react';
import Drawer from "./Drawer";
import Image from "next/legacy/image";

const nav_items = ['Home', 'Copilot club', 'Donate', 'Steering Locks!', 'Safe Call', 'Concentration', 'Jingle', 'News', 'Letters'];
  

const Index = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const closeDrawer = () => {
        setIsOpen(false)
    }

    return (
        <div className="w-full xl:max-w-6xl xl:mx-auto mb-5 fixed top-0 xl:top-5 left-1/2 translate-x-[-50%] z-10 transition duration-300">
            <div className="w-full flex justify-between items-center h-[80px] xl:rounded-[40px] border-b-[1px] xl:border-[1px] border-[#e4e4e7] bg-white backdrop-blur-lg  shadow-md px-4">
                <a className="flex items-center gap-2">
                    
                    <div className="flex items-center">
                        <Image src='/SafeCallmed.png' width={45} height={45} />
                    </div>
                    <span className="text-2xl font-bold text-[#b7691e]">ASF</span>
                </a>
                <div className="hidden md:flex justify-end w-full items-center pr-5">
                    {nav_items.map((itm, idx) => 
                        <span key={idx} className="cursor-pointer text-[#52525b] py-1 px-3 hover:bg-[#e4e4e7] text-[1rem] text-center rounded-[25px]">{itm}</span>
                    )}
                </div>
                <div className="flex md:hidden justify-center w-[45px] items-center cursor-pointer" onClick={() => setIsOpen(true)}>
                   <Image src={'/menu.png'} width={45} height={45} 
                   />
                </div>
                <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
            </div>
        </div>
    )
}

export default Index;