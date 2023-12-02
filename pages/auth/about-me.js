import Head from "next/head";
import Image from "next/image";
import {FaHtml5,FaCss3Alt,FaReact} from "react-icons/fa6";
import  {SiTailwindcss} from "React-icons/si";
import {TbBrandJavascript,TbBrandNextjs} from "React-icons/tb";
import {Lora} from "next/font/google";

const lora = Lora({
    subsets:['latin'],
    weight: '400'
})



export default function aboutMe() {

    return(
        <>
        <Head>
            <title>About Me</title>
        </Head>
        <main className="bd-zinc-500 w-full h-screen">

            <div className="justify-center items-center bg-zinc-500 text-white font-bold p-6">
                <h1>Enitan Ogungbade</h1>
                
            </div>

            

            <div className="flex flex-cols items-center bg-zinc-700/80">
            
            <p className={`${lora.className} p-8 text-white`}>I am a highly skilled fullstack web developer<br/> with professional experience specializing in<br/> HTML,CSS,JAVASCRIPT, and in the use of frontend <br/> frameworks such as React, Tailwindcss and Nextjs. As a fullstack developer,<br/> I have a solid understanding of development principles using<br/> and best practices.</p>
            <img className="bg-right-top h-[600px] w-[400px]" src="/Eni.jpg" alt= "beautiful african lady" />

            </div>
            <div className="flex flex-cols justify-center p-5 gap-6 text-3xl bg-gray-800/70">
                <FaHtml5/>
                <FaCss3Alt/>
                <FaReact/>
                <SiTailwindcss/>
                <TbBrandJavascript/>
                <TbBrandNextjs/>
            </div>
        </main>
    
        </>

    )
}