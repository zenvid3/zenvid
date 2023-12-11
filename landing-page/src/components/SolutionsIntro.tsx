import React from 'react'
import {motion} from 'framer-motion'
export default function SolutionsIntro() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <motion.div className='xs:w-11/12 md:w-4/5 '
        initial={{
          y: 100
        }}
        whileInView={{
          y : -30
        }}
        transition={{
          type : "tween"
        }}
      >
        <h2 className='xs:text-6xl md:text-8xl font-extrabold'>
        Web3 offers the ability for us to control our digital identity.
        </h2>
        </motion.div>
    </div>
  )
}
