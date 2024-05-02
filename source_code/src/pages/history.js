import React, { useState } from "react";
import Footer from "../components/footer";
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
