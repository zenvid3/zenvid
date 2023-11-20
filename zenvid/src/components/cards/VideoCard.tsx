import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
 type videoCardProps = {
  video? : any
 }
export default function VideoCard({} : videoCardProps) {
  return (
    <div className={` xs:w-11/12 mx-auto xs:h-80 sm:h-96 md:w-64 md:h-72  rounded-xl gap-2.5  md:mb-1    hover:bg-zinc-900 overflow-hidden flex flex-col grow shrink px-2 md:px-0`}>
        <div className='hover:text-rose-400/90'>
        <div className=' hover:border border-rose-500 rounded-xl overflow-hidden cursor-pointer'>
        <motion.img
         src={`https://ipfs.crossbell.io/ipfs/QmQviToiRDjAyHJotLtdYoc4haVGac7ozrwaZzHew5WbFz?img-quality=75&img-format=auto&img-width=640`} 
         alt='video cover'
         className='w-full h-60 sm:h-72 md:h-44 object-cover rounded-xl '
         whileHover={{
            scale : 1.09,
            transition : {
                duration : 0.5
            }
         }}
        >
  </motion.img>
  </div> 
         <h2 className='text-sm line-clamp-2 my-1'>Introducing: Miss Information, Your Fairy Government Godmother</h2>
         </div>

         <div className='flex items-center gap-3'>
           <Image
         src={`https://ipfs.crossbell.io/ipfs/QmVcNxFWe6qQnRfN1fJqiFh4R1P9V3VnW4QdUTKAetzAPC?img-quality=75&img-format=auto&img-width=640`} 
         width={200}
         height={200}
           alt='profile-pcture'
           className='w-8 h-8 rounded-full'
           />

           <div>
             <h1 className='text-xs font-semibold '>kabugu</h1>
             <p className='text-[9px]'>2 days ago</p>
           </div>
         </div>
    </div>
  )
}

