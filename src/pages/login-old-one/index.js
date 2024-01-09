import Layout from '@/components_fbl/NavigationComponents/Layout';
import ToastProvider from '@/src/components_fbl/Provider/ToastProvider';
import BannerSection from '@/src/components_fbl/pageBasedComponents/Log-in/BannerSection';
import { Box } from '@mui/material';
import Head from 'next/head';

const page = ({}) => {
  return (
    <Layout>
      <Head>
        <title>Login | Razorswift</title>
        <meta
          name="description"
          content="A dynamic ecosystem where talent and opportunities converge"
        />
      </Head>
      <Box component="main">
        <ToastProvider>
          <BannerSection />
        </ToastProvider>
      </Box>
    </Layout>
  );
};

export default page;
