import Image from 'next/image'
import Header from '@/components/TopNav/Header'
import { StarOutline } from '@/components/common/Icons'
import { HomePage } from '@/components/Home'



export default function Home() {
  return (
    <main
     className='bg-gray-800 min-h-screen w-full'
    >
    <HomePage   />
      </main>
  )
}
