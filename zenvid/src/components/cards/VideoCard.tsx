import Image from 'next/image'
import React from 'react'

 type videoCardProps = {
  video? : any
 }
export default function VideoCard({} : videoCardProps) {
  return (
    <div className={` xs:w-11/12 mx-auto xs:h-80 sm:h-96 md:w-64 md:h-64 bg-yellow-300 flex flex-col grow shrink px-2 md:px-1`}>
        <Image src={`https://ipfs.crossbell.io/ipfs/QmVcNxFWe6qQnRfN1fJqiFh4R1P9V3VnW4QdUTKAetzAPC?img-quality=75&img-format=auto&img-width=640`} 
          width={300}
          height={300}
          alt='cover'
          className='w-full h-64 sm:h-80 md:h-44 object-cover'
        />
         <h2>Introducing: Miss Information, Your Fairy Government Godmother</h2>

         <div>
             
         </div>
    </div>
  )
}
