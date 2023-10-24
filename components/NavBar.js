'use client'
import { useEffect, useState } from "react";

export default function NavBar() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        let prevScrollPos = 0;

        const handleScroll = event => {
            const currentScrollPos = window.scrollY
            if (currentScrollPos > prevScrollPos) {
                setHidden(true)
            } else {
                setHidden(false)
            }
            prevScrollPos = currentScrollPos
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${hidden ? "-translate-y-[100%]" : ""} fixed flex flex-row w-screen h-[10vh] items-center px-10 justify-between text-white font-telegraf transition-all delay-100 duration-500 ease-in-out`}>
            <div className="text-4xl">ARJUN</div>
            <div className="flex flex-row gap-10 text-sm text-slate-300">
                <div>PROJECTS</div>
                <div>ABOUT</div>
            </div>
            <div className=" border-[1px] border-[rgba(255,255,255,0.4)] rounded-full px-5 py-1">CONTACT ME</div>
        </div>
    )
}