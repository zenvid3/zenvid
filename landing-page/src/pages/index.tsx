import Image from 'next/image'
import { Inter } from 'next/font/google'
import {} from '@react-spring/web'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import AnimatedConents from '@/components/AnimatedConents'
import Hero from '@/components/Hero'
import TopNavbar from '@/components/TopNavbar'
import Vision from '@/components/Vision'
import Vision2 from '@/components/Vision2'
import Roadmap from '@/components/Roadmap'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen  ${inter.className} bg-[url("/img/stars.svg")] bg-gray-950 text-white `}
    >
      <TopNavbar   />
  <Hero />
  <Vision  />
   <Vision2   />
   <Footer  />
    </main>
  )
}
