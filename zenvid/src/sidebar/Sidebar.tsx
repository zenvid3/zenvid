import { categories, sidebarNav } from '@/assets/constant'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React, {useState} from 'react'

 type sidebarprops  = {
     isShowFull? : boolean
      toggleSidebar? : any
 }
export default function Sidebar({isShowFull} : sidebarprops) {
  return (
    <div className={`${! isShowFull && "xs:hidden md:block"}  md:w-24  border-r border-purple-600 bg-inherit`}>
    <div className={`${isShowFull && "w-screen h-screen bg-black/30 fixed top-[60px]"}`}>
        <div className={`${isShowFull ? "w-52 bg-white dark:bg-black p-2" : "items-center"} h-screen fixed to-[60px] flex flex-col  bg-inherit`}>
          {sidebarNav.map((item, i) => (
            <Link key={i} href={item.to}>
            <div className={`${isShowFull ? "flex-row  w-48 items-center py-2 px-4 rounded-xl gap-3" : "flex-col items-center"} flex  my-1 dark:hover:bg-gray-700 px-4 hover:bg-gray-300/80  py-3`} >  
              <item.icon className={`${isShowFull ? "w-3.5 h-4.5" : "w-5 h-5"}`}  />
               <p className='text-xs'>{item.title}</p>
              </div>
              </Link>
             
          ))}
          
  <div className='h-[0.6px] w-full bg-gray-700/30 dark:bg-gray-600 my-1'></div>
  {categories.map((item, i) => (
            <Link key={i} href={item.to}>
            <div className={`${isShowFull ? "flex-row  w-48 items-center py-2 px-4 rounded-xl gap-3" : "flex-col items-center"} flex  my-1 dark:hover:bg-gray-700 px-4 hover:bg-gray-300/80  py-3`} >  
              <item.icon className={`${isShowFull ? "w-3.5 h-4.5" : "w-5 h-5"}`}  />
               <p className='text-xs'>{item.title}</p>
              </div>
              </Link>
             
          ))}
        </div>

    </div>
  
    </div>
  )
}
