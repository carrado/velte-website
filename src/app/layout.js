"use client";

import Header from '@/components/Header'
import './globals.css'
import 'animate.css';
import { Work_Sans } from 'next/font/google'
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { usePathname } from 'next/navigation';


const inter = Work_Sans({ subsets: ['latin'], weight: '400' });


const metadata = {
  title: 'Velte',
  description: 'velte real estate properties Nigeria nigeria houses lands',
}



const initFacebookSdk = () => {
  return new Promise((resolve, reject) => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '714508894032705',
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });

      window.FB.AppEvents.logPageView();
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    resolve();
  });
}



export default function RootLayout({ children }) {
  const pathname = usePathname();

  // detect route change with useEffect dependency
  useEffect(() => {
    console.log('route change with dependency', pathname);
    initFacebookSdk();
  }, [pathname]);



  return (
    <Provider store={store}>
    <html lang="en">
      <title>{metadata.title}</title>
      <body className={inter.className}>
        {pathname !== '/signup' && pathname !== '/login' ?
          <div className='flex flex-col h-16'>
            <Header />
          </div>
          :
          null
        }
          <div>{children}</div>
      </body>
      </html>
    </Provider>
  )
}
