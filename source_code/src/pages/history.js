import React, { useState } from "react";
import Footer from "../components/footer";
import Signin from "../components/signin";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import HistorySection from "../components/historySection";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <HistorySection/>
     <Footer />
    </>
  );
};

export default History;
