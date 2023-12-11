import React from 'react'
import {motion} from 'framer-motion'
export default function Vision() {
  return (
    <div className='min-h-[70vh] flex flex-col items-center justify-center '>
       
    <motion.div className='flex items-center justify-center flex-col'
      whileInView={{
        //x : 20,
        y : -30
      }}
      transition={{
        duration : 1
      }}
      initial={{
        y : 100
      }}
    >
         <h1 className='text-5xl font-extrabold my-9'>IMAGINE A PLACE...</h1>
          <h3 className='text-center xs:text-xl md:text-3xl'>
          .....where you own your content, your data, and your connections  < br />
          Turn your videos into NFT treasures that you control <br />
           and can profit from. 
            with a friendly, transparent algorithm  <br /> amplifies genuine content and connects creators with <br /> audiences who genuinely care about their work.

          </h3>
    </motion.div>
    </div>
  )
}
