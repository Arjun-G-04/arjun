'use client'

import { useEffect, useState } from 'react'

export default function Project() {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (hover1 || hover2 || hover3) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [hover1, hover2, hover3])

    return (
        <div className=" h-screen w-screen text-white font-telegraf flex flex-col gap-10">
            <div className=" mt-16 ml-[40%] text-3xl text-end px-10">These are some of my select projects that showcase my work in web development.</div>
            <div className="flex flex-row gap-8 mx-8 relative">
                <div className="flex flex-col basis-0 grow">
                    <div 
                        onMouseOver={(e) => {
                            setHover2(true)
                        }} 
                        onMouseOut={(e) => {
                            setHover2(false)
                        }}
                        style={{backgroundImage: "url('/images/dwoc.png')"}} 
                        className=" aspect-[1/1.4] rounded-[3rem] bg-center bg-cover bg-white bg-no-repeat"
                    >
                        <div className={`${(hover1 == true || hover3 == true) && hover2 == false ? "bg-black/60" : ""} transition-all duration-500 ease-in-out h-full w-full`}></div>
                    </div>
                    <div className={`${hover2 ? "opacity-100" : "opacity-0"} duration-500 transition-all ease-in-out px-5 py-4`}>
                        DWoC Landing Page
                    </div>
                </div>
                <div className="flex flex-col basis-0 grow">
                    <div 
                        onMouseOver={(e) => {
                            setHover3(true)
                        }}
                        onMouseOut={(e) => {
                            setHover3(false)
                        }}
                        style={{backgroundImage: "url('/images/droid_defense.png')"}}
                        className=" aspect-[1/1.4] rounded-[3rem] bg-center bg-cover bg-blend-multiply"
                    >
                        <div className={`${(hover1 == true || hover2 == true) && hover3 == false ? "bg-black/60" : ""} transition-all duration-500 ease-in-out h-full w-full`}></div>
                    </div>
                    <div className={`${hover3 ? "opacity-100" : "opacity-0"} duration-500 transition-all ease-in-out px-5 py-4`}>
                        Mini 2D Shooting Game
                    </div>
                </div>
                <div className="flex flex-col basis-0 grow">
                    <div 
                        onMouseOver={(e) => {
                            setHover1(true)
                        }} 
                        onMouseOut={(e) => {
                            setHover1(false)
                        }}
                        style={{backgroundImage: "url('/images/aaveg.png')"}} 
                        className=" aspect-[1/1.4] rounded-[3rem] bg-center bg-contain bg-[#2F2F2F] bg-no-repeat"
                    >
                        <div className={`${(hover2 == true || hover3 == true) && hover1 == false ? "bg-black/60" : ""} transition-all duration-500 ease-in-out h-full w-full`}></div>
                    </div>
                    <div className={`${hover1 ? "opacity-100" : "opacity-0"} duration-500 transition-all ease-in-out px-5 py-4`}>
                        Aaveg &apos;24 Induction Website
                    </div>
                </div>
                <div className=" absolute pointer-events-none flex flex-col h-full w-full justify-center items-center">
                    <div className='relative w-full h-full flex flex-col justify-center items-center'>
                        <div className='absolute flex flex-col justify-center items-center'>
                            <span className={`${hover1 ? "opacity-100" : "opacity-0"} transition-all duration-500 ease-in-out text-3xl`}>FEATURED PROJECT</span>
                            <span className={`${hover1 ? "opacity-100" : "opacity-0"} text-6xl font-bold duration-500 transition-all ease-in-out`}>
                            Aaveg
                            </span>
                        </div>
                        <div className='absolute flex flex-col justify-center items-center'>
                            <span className={`${hover2 ? "opacity-100" : "opacity-0"} transition-all duration-500 ease-in-out text-3xl`}>FEATURED PROJECT</span>
                            <span className={`${hover2 ? "opacity-100" : "opacity-0"} text-6xl font-bold duration-500 transition-all ease-in-out`}>
                            DWoC
                            </span>
                        </div>
                        <div className='absolute flex flex-col justify-center items-center'>
                            <span className={`${hover3 ? "opacity-100" : "opacity-0"} transition-all duration-500 ease-in-out text-3xl`}>FEATURED PROJECT</span>
                            <span className={`${hover3 ? "opacity-100" : "opacity-0"} text-6xl font-bold duration-500 transition-all ease-in-out`}>
                            Droid Defense
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}