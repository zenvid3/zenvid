import React from 'react'
import { useSpring, animated, useInView } from '@react-spring/web'
import {motion } from 'framer-motion'
export default function AnimatedConents() {
  
  return (
    <div>
        AnimatedConents
        

         <div>

            <motion.div className='w-[70%] h-[400px] bg-red-800 rounded-xl'
             animate= {{
                x : 200
             }}
            >
              <h1>Firts  element</h1>
            </motion.div>

            <motion.div className='w-[70%] h-[400px] bg-red-800 rounded-xl my-5'
             animate= {{
                x : 200
             }}
            >
              <h1>Firts  element</h1>
            </motion.div>
            <motion.div className='w-[70%] h-[400px] bg-red-800 rounded-xl my-5'
             animate= {{
                x : 200
             }}
            >
              <h1>Firts  element</h1>
            </motion.div>
            <motion.div className='w-[70%] h-[400px] bg-red-800 rounded-xl my-5'
             animate= {{
                x : 200
             }}
            >
              <h1>Firts  element</h1>
            </motion.div>
            <motion.div className='w-[70%] h-[400px] bg-red-800 rounded-xl my-5'
             initial = {{
                x : -200
             }}
             transition={{
                duration : 2
             }}
             whileInView={{
                x : 400
             }}
             
            >
              <h1>Firts  element</h1>
            </motion.div>
         </div>
    </div>

  )
}
