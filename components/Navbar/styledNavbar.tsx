import styled from "styled-components";

export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    button {
        background-color: #fff;
        border: 1px solid #DAE4F2;
        font-size: 1.2rem;
        padding: 0.5rem;
        display: flex;
        width: 140px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
        border-radius: 16px;
    }
`;

export const VectorStyled = styled.img`
    transform: rotate(-180deg);
    `;