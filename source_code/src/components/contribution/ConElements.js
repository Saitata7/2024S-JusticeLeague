import styled from "styled-components";

export const ServicesContainer = styled.div`
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background: #010606;
    padding: 50px 0;

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
    }

`

export const ServicesWrapper = styled.div`
    // margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 20px 50px;
    }

`

export const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 22px;
    max-height: 500px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

`

export const ServicesIcon = styled.img`
    width: 90%;
    max-width: 200px;
    border-radius: 50%;
    margin-bottom: 5px;
    
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const ServicesH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 900;
    
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;

`
export const ServicesA = styled.a`
    color: #3b97ed;
    cursor: pointer;
    text-decoration: none;
    outline: none;

`
