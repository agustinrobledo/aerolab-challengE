import styled from "styled-components";

export const StyledHero = styled.div<{ image: string }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    background-image: url(${props => props.image});
    div{
        display: flex;
    }
    `;

export const HeroTitles = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center; 
    width: 40%;  
    h3{
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 600;
        color: #7C899C;
        font-style: normal;
        line-height: 150%;
        letter-spacing: 0.24em;
    }
    p{
        font-size: 1.3rem;
        color: #7C899C;
        margin-top: -5%;

    }
    button{
        display: flex;
        width: 70%;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
        font-size: 1.2rem;
        color: white;
        font-weight: 600;
        font-style: normal;
        height: 4.5rem;
        border: none;
        background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
        border-radius: 24px;
        img{
            margin-left: 1rem;
        }
    }
    `;
export const Tech = styled.h1`
        font-size: 200px;
        text-transform: uppercase;
        font-weight: 900;
        margin-top: -8%;
        background: -webkit-linear-gradient(to right, #2670EC, #CC7CFA);
        background: linear-gradient(to right, #2670EC, #CC7CFA);
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
`;

export const Zone = styled.h1`
        font-size: 200px;
        margin-top: -14%;
        text-transform: uppercase;
        font-weight: 900;
        color: #252F3D;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const Browse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #DAE4F2;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 2rem;
    width: 25%;
    transform: rotate(-3deg);
    img{
        background: linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);
        border-radius: 2rem;
    }
    h1{
        font-size: 2rem;
        font-weight: 900;
        text-transform: uppercase;
        background: -webkit-linear-gradient(to right, #2670EC, #CC7CFA);
        background: linear-gradient(to right, #2670EC, #CC7CFA);
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
    }
    div{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        img{
            width: 30px;
            height: 30px;
            border: none;
            background: none;
            border-radius: none;
        }
    }
`;