import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="about">
      <ServicesH1>Our Purpose</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Accuracy</ServicesH2>
          <ServicesP>
          Fact Finder aims to combat the spread of fake 
          news by providing users with reliable information and analysis.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Integrity</ServicesH2>
          <ServicesP>
          By empowering users with tools to discern truth from falsehood, 
          we contribute to fostering a more informed society.
         </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Fairness</ServicesH2>
          <ServicesP>
          AI/ML algorithms enable the differentiation between genuine 
          and deceptive news through classification.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
