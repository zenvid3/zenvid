
import React from 'react'

  type statsProps ={
    stats? : any
    createdAt ? : any
     videId? : any
     mints ? : any
     likes ? : any
     tips ? : any
  }
export default function FullVideoStats({stats, createdAt, videId, tips} : statsProps) {

     console.log("the video  stats", stats)
     console.log("the video uploaded at this time", createdAt)
  return (
    <div>
         <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

         </div>
    </div>
  )
}
