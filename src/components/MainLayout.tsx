import React, { PropsWithChildren } from 'react'
import HtmlAddons from './util/HtmlAddons'
import {Roboto} from 'next/font/google';
import Header from './Header';
import Footer from './Footer';

const roboto = Roboto({subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], variable: "--font-roboto"});


const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <div id='__layout__'>
      <HtmlAddons/>
      <div className={`${roboto.variable} font-roboto w-full min-h-dvh bg-slate-50 text-slate-950 dark:text-slate-50 dark:bg-slate-950 duration-200`}>
        <Header/>
        <main className='w-full min-h-dvh pt-16 md:pt-36 inner__padding'>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
