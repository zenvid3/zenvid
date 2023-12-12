import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <DefaultSeo
      title='Zenvid | decentralized video sharing platform'
      description='A decentralized video sharing platform empowering creators, the easiest way to create social Nft'
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://zenvid.xyz',
        siteName: 'Zenvid',
        images: [
          {
            url: `/img/website-banner.png`,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: `/img/website-banner.png`,
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          {
            url: `/img/website-banner.png`,
            width: 1280,
            height: 640,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
        ],
    }}
    twitter={{
      handle: '@zenvid',
      site: '@zenvid',
      cardType: 'summary_large_image',
  }}

  />
       <Component {...pageProps} />

    </>
  )
}
