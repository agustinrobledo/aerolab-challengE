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
    background: linear-gradient(102.47deg, #94B8F6 -5.34%, #E8BEFD 106.58%);
    background-size: 100% 70%;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Card = styled.div<{rotate:string}>`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #DAE4F2;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 2rem;
    width: 25%;
    transform: rotate(${props => props.rotate});
    img{
        background: linear-gradient(102.47deg, #839CEA -5.34%, #E8BEFD 106.58%);
        border-radius: 2rem;
    }
    div{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
            h1{
            font-size: 2rem;
            display: flex;
            align-items: center;
            font-weight: 900;
            text-transform: uppercase;
            background: -webkit-linear-gradient(to right, #2670EC, #CC7CFA);
            background: linear-gradient(to right, #2670EC, #CC7CFA);
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent;
            img{
                margin-right: 0.5rem;
                width: 40px;
                height: 40px;
                border: none;
                background: none;
                border-radius: none;
            }
            p{
                width: 100%;
            }
        }
    }
`;