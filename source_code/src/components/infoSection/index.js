import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./InfoElements";
import { ButtonBasic } from "../ButtonElements";
import GrowingTextarea from "../VerifyTextArea/Growingtextarea";
import { useState } from "react";

export const InfoSection = ({ id, title, subtitle, text, image, btnText }) => {
  return (
    <>
      <InfoContainer id={id} className="bg-black">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-white mb-5">{title}</Title>
              <p className="text-white mb-4">{text}</p>
              <ButtonBasic to="" primary="true" dark="true" className="mx-auto">
                {btnText}
              </ButtonBasic>
            </div>
            <div className="col-lg-6 col-sm-12 img-wrap">
              <img src={image} alt="" className="fit-img"></img>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export const InfoSection_upload = ({ id, title, subtitle, text, image, btnText }) => {
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState("");
  const [showImage, setShowImage] = useState(true);
  const [inputText, setInputText] = useState("");

  const handleSummarize = () => {
    setIsSummarizing(true);
    setShowImage(false);

    // Make the API request to the Flask backend
    fetch("http://127.0.0.1:5000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: inputText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSummarizing(false);
        setSummary(data.Summary);
      })
      .catch((error) => {
        console.error(error);
        setIsSummarizing(false);
      });
  };

  const handleInputChange = (value) => {
    setInputText(value);
  };

  return (
    <>
      <InfoContainer id={id} className="bg-black">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-white mb-5">{title}</Title>
              <GrowingTextarea onInputChange={handleInputChange} onSummarize={handleSummarize}  />
             
              
            </div>
            <div className="col-lg-6 col-sm-12">
              {isSummarizing ? (
                <div style={{  color: "white" }}>Loading...</div>
              ) : showImage ? (
                <div className="img-wrap">
                  <img src={image} alt="" className="fit-img" />
                </div>
              ) : (
                <div style={{ maxHeight: "200px", overflowY: "auto", color: "white" }}>
                  {summary}
                </div>
              )}
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

