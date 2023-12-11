import Image from 'next/image';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
export default function Hero() {
  return (
    <div className='min-h-screen  flex items-center justify-center'>
         <motion.div
          initial={{y: 400}}
          animate ={{
            y : -20
          }}
          transition={{
            duration : 2
          }}
         >
            <div className='xs:min-h[30vh] md:min-h-[40vh] flex items-center justify-center'>
        <h1 className='xs:text-4xl xs:leading-snug sm:text-5xl sm:leading-snug md:text-6xl md:leading-snug lg:text-7xl lg:leading-snug text-center font-extrabold'>
            A video sharing platform < br />
             Empowering    

             <TypeAnimation
               sequence={[
                 "Creators",
                 1000,
                 "Users",
                 1000
               ]}
               wrapper='span'
               repeat={Infinity}
               className='ml-3 text-rose-500'
             />
        </h1>
        </div>
        <div className='mt-5 px-4'>
             <Image
    src={`/img/zenvid.png`}
  width={1200}
  height={800}
  alt='zenvid'
  className=''
/>
        </div>
        </motion.div>
        </div>
  )
}
