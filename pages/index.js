import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';

export default function Home() {

  const { data: session } = useSession();

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instabilt</title>
        <link rel="icon" href="../media/icon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />

      {session &&
        <footer className="bottom-0 sticky z-50 pb-2 lg:hidden"> 
          <Footer/>
        </footer>
      }

      
      
    </div>
  )
}
