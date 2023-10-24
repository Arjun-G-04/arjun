export default function About() {
    return (
        <div className="h-screen w-screen bg-black text-white font-telegraf flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-between">
                <div className="grow basis-0"><div className="ml-10 mr-[30%] text-sm text-justify">&emsp;&emsp;Hi! My name is ARJUN. I am a Web Developer at Delta Force NITT where I help create web apps for NITT and its fests.</div></div>
                <div style={{backgroundImage: "url('/images/profile.jpg')"}} className="grow basis-10 aspect-square bg-white bg-cover bg-center bg-no-repeat rounded-[3rem]"></div>
                <div className="grow basis-0"></div>
            </div>
            <div className=" text-9xl -translate-y-12 tracking-[0.15em]">ARJUN</div>
        </div>
    )
}