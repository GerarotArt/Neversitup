import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

//internal
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
