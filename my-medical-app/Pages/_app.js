import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme'; // Ensure correct path to your theme file
import { useRouter } from 'next/router';
import Layout from '../src/app/components/Layout/Layout';
import SideBar from '../src/app/components/SideBar/SideBarTop';
import '../src/app/global.css';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const isAuthPage = pathname === "/" || pathname === "/Signup";

  return (
    <ThemeProvider theme={theme}>
      <Layout sidebar={!isAuthPage}>
        {!isAuthPage && <SideBar /> }
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
