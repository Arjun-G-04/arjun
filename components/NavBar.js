'use client'
import { useEffect, useState } from "react";

export default function NavBar() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        let prevScrollPos = 0;

        const handleScroll = event => {
            const currentScrollPos = window.scrollY
            if (currentScrollPos >= window.innerHeight * 2.9) {
                setHidden(false)
            } else {
                if (currentScrollPos > prevScrollPos) {
                    setHidden(true)
                } else {
                    setHidden(false)
                }
            }
            prevScrollPos = currentScrollPos
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${hidden ? "-translate-y-[100%]" : ""} fixed flex flex-row w-screen h-[10vh] items-center px-10 justify-between text-white font-telegraf transition-all delay-100 duration-500 ease-in-out z-50`}>
            <div className="text-4xl">ARJUN</div>
            <div className="flex flex-row gap-10 text-sm text-slate-300">
                <div className=" rounded-full px-4 py-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black flex justify-center item-center"><span>PROJECTS</span></div>
                <div className=" rounded-full px-4 py-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black flex justify-center item-center"><span>ABOUT</span></div>
            </div>
            <div className=" cursor-pointer border-[1px] border-[rgba(255,255,255,0.4)] rounded-full px-5 py-1 transition-all duration-300 ease-in-out hover:bg-white hover:text-black ">CONTACT ME</div>
        </div>
    )
}