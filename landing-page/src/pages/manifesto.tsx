import React from 'react'
import { Inter } from 'next/font/google'
import TopNavbar from '@/components/TopNavbar'
import ManifestoIntro from '@/components/ManifestoIntro'
import Problem from '@/components/Problem'
import SolutionsIntro from '@/components/SolutionsIntro'
const inter = Inter({ subsets: ['latin'] })
export default function manifesto() {
  return (
    <main
    className={` min-h-screen  ${inter.className} bg-[url("/img/stars.svg")] bg-gray-950 text-white `}
  >
    <div>
        <TopNavbar  />
         <ManifestoIntro  />
         <Problem />
         <SolutionsIntro  />
    </div>
    </main>
  )
}
