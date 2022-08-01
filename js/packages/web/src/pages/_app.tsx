import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import '../styles/index.less';
import '../styles/mintzero.less';
import '../styles/styleguide.less'
import '../styles/globe.less';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Metaplex NFT Marketplace</title>
      </Head>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}
