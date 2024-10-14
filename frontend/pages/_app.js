/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../store';

import '../styles/globals.css';
import '../styles/modal.css';
import '../styles/wheel.css';
import '../styles/responsive.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/elements.css';
import '../styles/grid.css';
import 'antd/es/message/style/index.css';
import 'antd/es/badge/style/index.css';
import '../styles/StrengthMeter.css';
import '../styles/TrendingStockTab.css';
//import styles from "../../styles/chatbot.module.css";
import 'react-chatbot-kit/build/main.css';
import '../styles/test.css'
import Link from 'next/link';
import Head from 'next/head';
//import 'react-svg-radar-chart/build/css/index.css'
import '../styles/Forum.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>

<Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
</Head>
     <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>

  );
}

export default (MyApp);
