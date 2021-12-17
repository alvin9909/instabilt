import React from "react";
import { useSession } from "next-auth/react";

import Head from "next/head";
import Header from "../components/Header";
import Modal from "../components/Modal";
import ChatContent from "../components/ChatContent";

function inbox() {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Instabilt</title>
        <link rel="icon" href="../media/icon.ico" />
      </Head>
      <Header />
      <ChatContent />
      <Modal />
    </div>
  );
}

export default inbox;
