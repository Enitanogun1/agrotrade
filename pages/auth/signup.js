import Head from "next/head";
import Image from "next/image";
 import { TextField, } from "@mui/material";


export default function Signup () {
    return (

        <><Head>
            <title>Signup | AbroTrade</title>
        </Head>
        <main className="h-screen flex flex-col justify-center items-center py-20">
            <div className="w-full md:w-[420px] flex flex-col g-3 border border-gray-300 rounded-md p-3">
                
                <Image 
                width={400} 
                height={120} 
                src='/farm-trade.jpeg' alt="farm trade"/>
                
            </div>

            <div className="flex flex-col gap-3">
                <ul className="grid grid-cols-2">
                    <li className="text-center">Farmer</li>
                    <li className="text-center">Buyer</li>
                </ul>

                <div>
                    <h2 className="text-2xl ">Register as buyer account</h2>
                    <p className="text-xs text-green-600">Fill the form below to create a buyer's account</p>
                </div>

                <form>
                    <div className="mb-2">
                        <TextField className="w-full" variant="outlined" label="first name"/>
                    </div>
                    <div className="mb-2">
                        <TextField className="w-full" variant="outlined" label="last name"/>
                    </div>
                    <div className="mb-2">
                        <TextField className="w-full" type="email" label="email"/>
                    </div>

                    <button className="h-[48px] w-full flex justify-center items-center bg-green-700 text-white  text-xl rounded-md">Register</button>
                </form>
            </div>
        </main>
        
        
        </>
    )
}