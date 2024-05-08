import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesA} from "./ConElements";
import Sai from "../../images/team/sai.jpeg"
import Maheshwari from "../../images/team/maheshwari.jpg"
import Manthan from "../../images/team/manthan.jpg"
import Rushabh from "../../images/team/Rushabh.jpg"
import kavita from "../../images/team/Kavita.jpeg"
import Saurabh from "../../images/team/saurabh.jpg"
import Gayatri from "../../images/team/gayatri.jpg"
import Suraj from "../../images/team/suraj.jpg"

const Contribution = () => {
  return (
    <ServicesContainer id="teamm">
      <ServicesH1>Our Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Sai} />
          <ServicesH2>Sai Tata</ServicesH2>
          <ServicesH2>Software Engineer</ServicesH2>
          <ServicesP>
          I'm a software engineer enthusiast who loves to learn and explore new technology. 
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Rushabh} />
          <ServicesH2>Rushabh Shingala</ServicesH2>
          <ServicesP>
          I'm a software engineer to Passionate about building web solutions with ASP.NET and MVC.
         </ServicesP>
         <ServicesA href="linkedin.com/in/rushabhshingala594551170" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Saurabh} />
          <ServicesH2>Saurabh Chaudhary</ServicesH2>
          
          <ServicesP>
          I'm an software engineer with a passion for learning and exploring new technologies especially working on backend.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saurabh-chaudhary-8323982b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={kavita} />
          <ServicesH2>Kavita Kamtekar</ServicesH2>
          <ServicesP>
          I'm an enthusiastic software engineer who thrives on learning about 
          cutting-edge technologies and diving deep into their exploration.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/kavita-kamtekar/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Maheshwari} />
          <ServicesH2>Maheshwari Vidyadharani</ServicesH2>
          <ServicesP>
          I'm an enthusiastic software engineer with a passion for learning and exploring new technologies.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/maheswari-vidyadharani-013736253/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Manthan} />
          <ServicesH2>Manthan Kale</ServicesH2>
          <ServicesP>
          I am software Engineer, I enjoy solving difficult problems and give accurate outcomes.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/m-pankaj-kale-1a0963217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Suraj} />
          <ServicesH2>Suraj Salunkhe</ServicesH2>
          <ServicesP>
          "I am software Engineer, who is achieving function while avoiding failure.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/suraj-salunkhe-8300b8169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Gayatri} />
          <ServicesH2>Gayatri Kulkarni</ServicesH2>
          <ServicesP>
          I am software engineer, I follows my passion to build and learn more about technologies.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/gayatri-kishor-kulkarni-56468a217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Contribution;
