'use client'
import clsx from 'clsx';
import { useState } from "react"

import { Roboto } from "next/font/google"
import Image from "next/image"
const roboto = Roboto({
    subsets:['latin'],
    weight:'700'
})


const Welcome = () => {

    const[appear, setAppear] = useState(true)
  return (
    <div className={clsx(
        'top-0 left-0 z-10  w-screen h-screen bg-slate-300 fixed flex items-center justify-center',
        {
          'block': appear,
          'hidden': !appear,
        },
  )}>
    <div className={`${roboto.className} relative text-2xl text-center bg-slate-400 h-1/2 w-1/2 flex items-center justify-center p-10 drop-shadow-lg`}>
      Welcome to the Dictionary App. 
      Enter your word to see the results, and be surprised.
    <Image 
    src={'https://cdn-icons-png.flaticon.com/512/75/75519.png'}
    width={50}
    height={50}
    alt='Close'
    className="absolute top-10 right-10 cursor-pointer"
    onClick={()=>{setAppear(!appear)}}
    />
    
    </div>

  </div>
  
  )
}

export default Welcome