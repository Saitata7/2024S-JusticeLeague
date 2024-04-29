import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection, { InfoSection_upload } from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Contribution from "../components/contribution";
import Footer from "../components/footer";


  const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <InfoSection
        image={Image1}
        id="about"
        subtitle="Ensuring Hassle-Free Ownership and Optimal Property Performance"
        title="Efficient Property Management and Maintenance Services"
        text="Discover reliable property management and maintenance solutions tailored to meet your needs. Our expert team takes care of all aspects, from tenant screening and rent collection to regular upkeep and repairs. Enjoy stress-free property ownership and maximize your investment's potential. Trust us to handle the complexities while you focus on what matters most."
        btnText="See You"
      /> */}
      <InfoSection_upload
        image={Image1}
        id="verifynews"
        subtitle="Ensuring you get continuous updates and improvements."
        title="Efficient Fake News Detection Service."
        text="Enter News."
        btnText="Verify News"
      /> 

      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Hello"
        title="In Progress"
        text="Our contributor Info"
        btnText="Explore"
      />
      <Services />
      <Contribution />
      <InfoSectionLight
        image={Image1}
        id="contact"
        subtitle="Contact information"
        title=""
        text="Address: One Pace Plaza, New York, NY 10038"
        newtext ="Email: email@gmail.com  |  Phone: +1 (866) 722-3338"
        //btnText="Read more"
      />
      <Footer />
     
    </>
  );
};
export default Home