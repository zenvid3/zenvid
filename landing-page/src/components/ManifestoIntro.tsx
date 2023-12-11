import React from 'react'
import {motion} from 'framer-motion'
export default function ManifestoIntro() {
  return (
    <div className='flex h-screen items-center justify-center'>
        <motion.div
         whileInView={{
           x : 20 
         }}
         transition={{
            duration : 2
         }}
        >
             <h1 className='xs:text-3xl md:text-6xl font-extrabold text-center my-6'>The Zenvid manifesto</h1>
              <p className='text-center leading-snug xs:text-lg md:text-2xl'>Our Manifesto describes the problems associated with digital < br /> media platforms in their current form, as well < br/> as our beliefes  to these concerns.</p>
        </motion.div>
    </div>
  )
}
