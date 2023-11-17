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

import { cn } from '@/lib/utils';
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const wagmiConfig = createWagmiConfig({
    appName: "zenvid",
    // WalletConnect Project ID.
    // You can create or find it at https://cloud.walletconnect.com
    walletConnectV2ProjectId: "YOUR_PROJECT_ID",
  });
  return (
    <QueryClientProvider client={queryClient}>
    <WagmiConfig config={wagmiConfig}>
      <ThemeProvider
       attribute='class'
       defaultTheme='dark'
       disableTransitionOnChange
       >
      <ConnectKitProvider>
        <NotificationModal  />
    <Component {...pageProps} />
    </ConnectKitProvider>
    
    </ThemeProvider>
    </WagmiConfig>
    </QueryClientProvider>
  ) 
}
