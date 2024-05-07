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
    <ServicesContainer id="services">
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
          By empowering users with tools to discern truth from falsehood, 
          we contribute to fostering a more informed society.
         </ServicesP>
         <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Saurabh} />
          <ServicesH2>Saurabh Chaudhary</ServicesH2>
          
          <ServicesP>
          AI/ML algorithms enable the differentiation between genuine 
          and deceptive news through classification.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={kavita} />
          <ServicesH2>Kavita Kamtekar</ServicesH2>
          <ServicesP>
          AI/ML algorithms enable the differentiation between genuine 
          and deceptive news through classification.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Maheshwari} />
          <ServicesH2>Maheshwari Vidyadharani</ServicesH2>
          <ServicesP>
          AI/ML algorithms enable the differentiation between genuine 
          and deceptive news through classification.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Manthan} />
          <ServicesH2>Manthan Kale</ServicesH2>
          <ServicesP>
          AI/ML algorithms enable the differentiation between genuine 
          and deceptive news through classification.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Suraj} />
          <ServicesH2>Suraj Salunkhe</ServicesH2>
          <ServicesP>
          AI/ML algorithms enable the differentiation between genuine 
          and deceptive news through classification.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Gayatri} />
          <ServicesH2>Gayatri Kulkarni</ServicesH2>
          <ServicesP>
          AI/ML algorithms enable the differentiation between genuine 
          and deceptive news through classification.
          </ServicesP>
          <ServicesA href="https://www.linkedin.com/in/saitata/" target="_blank">LinkedIn</ServicesA>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Contribution;
