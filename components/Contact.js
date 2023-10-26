'use client'

import { useEffect, useState } from "react";

export default function Contact() {
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        const handleScroll = event => {
            const currentScrollPos = window.scrollY
            if (currentScrollPos >= window.innerHeight * 2.9) {
                setExpand(false)
            } else {
                setExpand(true)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className="h-screen w-screen font-telegraf text-white flex flex-col">
            <div className={`${expand ? "border-slate-400/0" : "mx-20 mt-[10vh] rounded-[3rem] border-slate-400/100"} h-full border transition-all delay-100 duration-700 ease-in-out flex flex-col justify-center items-center`}>
                <span>Got a project in mind?</span>
                <span className="text-7xl tracking-wide mt-4">LET&apos;S TALK</span>
                <span className=" w-20 aspect-square rounded-full border border-white flex justify-center items-center text-xs mt-8">Contact me</span>
            </div>
            <div className="flex flex-row justify-between items-center px-10 h-[10vh]">
                <div>Design Inspiration</div>
                <div className="flex flex-row gap-10 text-slate-300">
                    <span>INSTAGRAM</span>
                    <span>LINKED IN</span>
                    <span>GITHUB</span>
                </div>
            </div>
        </div>
    )
}