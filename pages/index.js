import Head from "next/head"
import { Nunito } from 'next/font/google';

const nunitoBold = Nunito({
  subsets: ["latin"],
  weight: '700'
})

const nunito = Nunito({
  subsets: ["latin"],
})


export default function Index(){



 return (
  <>
    <Head>

        <title>Agro Trade</title>
    </Head>
    <main className="bg-home w-full h-screen flex flex-col justify-end md:grid-cols-4 lg:grid-cols-6">
    {/* bottom content */}
      
    <div className="flex flex-col justify-end gap-6 h-[40%] bg-gradient-to-b from-green-400/60 to-green-900 p-3 pb-12" >
        <div className= {styles.block}> 
          <h1 className = {`${ nunitoBold.className} text-5xl`}>
            <span className="text-white">Agro</span>
            <span className="text-lime-300">Trade</span>
          </h1>

          <p className="text-center text-md text-white">Your easy and reliable online marketplace to trade farm produce</p>

        </div>

        <blockquote className={styles.block}>

          <button className={`${styles.btn} bg-lime-500`}>Login</button>
          <button className={`${styles.btn} bg-white`}>Register</button>
        </blockquote>

      </div>
  
    </main>
  </>
 )
}




const styles = {
  block: 'flex flex-col item-center gap-3',
  btn: 'w-full h-[48px] flex justify-center itens-center text-center font-bold rounded-xl'
}