import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig } from "wagmi";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, createWagmiConfig } from "@crossbell/connect-kit";
import "@crossbell/connect-kit/colors.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { NotificationModal } from "@crossbell/notification";
import NextNProgress from 'nextjs-progressbar';
import { cn } from '@/lib/utils';
import Layout from '@/components/Layout';
import { Toaster } from "@/components/ui/toaster"
import { NextSeo, DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic'
import { WC_PROJECT_ID } from '@/assets/constant';
const PWAInstall = dynamic(() => import('../components/PwaInstall'), {
  ssr: false,
})
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const wagmiConfig = createWagmiConfig({
    appName: "zenvid",
    // WalletConnect Project ID.
    // You can create or find it at https://cloud.walletconnect.com
    walletConnectV2ProjectId: WC_PROJECT_ID,
  });
  return (
    <QueryClientProvider client={queryClient}>
    <WagmiConfig config={wagmiConfig}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        
       >
       
      <ConnectKitProvider>
      <Layout>
        <NotificationModal  />
        <NextNProgress color="#4f46e5" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}  />
         <>
         <DefaultSeo
            title='Zenvid'
            description='Zenvid - decentralized video-sharing platform. designed to revolutionize your digital content experience.Take control of your content'
            openGraph={{
              url: 'https://zenvid.xyz',
              title: 'Zenvid',
              description: 'Zenvid - decentralized video-sharing platform. designed to revolutionize your digital content experience.Take control of your content',
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
              ],
              siteName: 'Zenvid',
            }}
            twitter={{
              handle: '@zenvid',
              site: '@zenvid',
              cardType: 'summary_large_image',
            }}
         />
         <Component {...pageProps} />
         <PWAInstall />

         </>

    </Layout>
    </ConnectKitProvider>
    <Toaster />
    </ThemeProvider>
    </WagmiConfig>
    </QueryClientProvider>
  ) 
}
