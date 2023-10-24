'use client'

import { useEffect, useState } from 'react'
import {BsArrowDown} from 'react-icons/bs'
import SmoothScroll from '@/libs/smoothScroll';

export default function Hero() {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        console.log("here")
        if (scroll > 0) {
            window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'})
        }
    }, [scroll])

    return (
        <div className="h-screen w-screen bg-black text-white font-telegraf select-none flex flex-col">
            <div className=" grow flex flex-col justify-center">
                <div className=" text-8xl font-bold text-center">SOFTWARE</div>
                <div className="flex flex-row justify-center items-center gap-5"><span className="text-8xl font-bold">DEVELOPER</span><span className=" text-xs w-[15%] text-justify">&emsp;&emsp;Focused on developing scalable and reliable web applications for NITT that solves problems and enhances the campus experience</span></div>
                <div className="flex flex-row justify-center mt-10">
                    <div onClick={() => setScroll(scroll+1)} className=" cursor-pointer w-24 aspect-square rounded-full border border-white flex justify-center items-center">
                        <BsArrowDown className=' text-5xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}