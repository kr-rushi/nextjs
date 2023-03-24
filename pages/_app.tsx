import MainLayout from '@/src/components/layout/main-layout'
import '@/styles/globals.css'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
// export default function App({ Component, pageProps }: AppProps) {
//   if(Component.getLayout){
//     return Component.getLayout(<Component {...pageProps} />)
//   }
//   return (
//     <>
//  <MainLayout>
//   <Component {...pageProps} />
//   </MainLayout>
//   </>)
// }
const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  if(getLayout)
  return getLayout(<Component {...pageProps} />);
  return(
    <>
    <MainLayout>
    <Component {...pageProps}/>
    </MainLayout>
    </>
  )
};

export default MyApp;
