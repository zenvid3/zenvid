import React from 'react'

export default function ChannelBanner() {
  return (
    <div className='relative z-0'>
    <div className={`h-72 md:h-80 bg-[url('/img/star.svg')]  border border-red-600   `}>
        <div className='flex xs:flex-col md:flex-row justify-end py-2 px-4 gap-3  items-end z-50'>
             <div className='inline-flex max-w-[130px]  gap-2 items-center bg-gray-300 hover:bg-gray-300/70 dark:bg-zinc-800 py-2 px-4 cursor-pointer hover:dark:bg-zinc-700 rounded-xl '>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<button className=''>Support</button>
             </div>
             <div className='inline-flex gap-2 items-center max-w-[130px] dark:bg-zinc-800 py-2 px-4 cursor-pointer  bg-gray-300 hover:bg-gray-300/70 hover:dark:bg-zinc-700 rounded-xl '>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<button className=''>Follow</button>
             </div>

             <div className='inline-flex gap-2 items-center max-w-[130px] dark:bg-zinc-800 py-2 px-4 cursor-pointer  bg-gray-300 hover:bg-gray-300/70 hover:dark:bg-zinc-700 rounded-xl '>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>

<button className=''>Share</button>
             </div>
        </div> 
    </div>
      <div className='absolute xs:top-[75%] md:top-[73%]  w-full bg-white/40 dark:bg-black/70 backdrop-blur-lg '>
        <div className='flex gap-3 items-center z-10'>
          <img
   src='https://thumbnails.odycdn.com/optimize/s:200:0/quality:95/plain/https://thumbnails.lbry.com/UC7YOGHUfC1Tb6E4pudI9STA'
   alt='image'
  className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full'
/>

 <div className='z-20'>
   <h1 className='font-bold text-3xl'>Abdul </h1>
   <h2 className='text-sm'>100 followers</h2>
 </div>
      </div>
    </div>
 
    </div>
  )
}
