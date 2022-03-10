import styled from "styled-components"

// color
// #02414B
// #16525C
// #29626D
// #3D737D
// #50838E

export const Container = styled.div`
    margin-top: 50px;
    width: 507px;
    height: 352px;
    background-color: #3D737D;
    
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Group = styled.div`
    display: flex;
`;

export const Image = styled.div`
    img {
        width: 192px;
        height: 192px;
        border-radius: 20px;
        object-fit: cover;
    }
`;

export const Content = styled.div`
    margin-left: 30px;
`;

export const Author = styled.div`
    h1 {
        color: #fff;
        font-size: 24px;
        font-family: "Poppins";
        padding: 0;
        margin: 0;
        margin-top: 10px;
    }

    span {
        color: #fff;
        font-size: 18px;
        font-family: "Poppins";
        font-weight: 200;
        padding: 0;
        margin: 0;
    }
`;

export const Cubo = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 20px;
    background-color: #50838E;

    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 70px;
        color: #fff;
    }
`;

export const Sociais = styled.div`
    margin-top: 22px;
    display: flex;
`;

export const Gmail_Button = styled.button`
    width: 90%;
    height: 73px;
    margin-top: 20px;
    background-color: #50838E;
    color: #fff;
    border: none;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px;
    cursor: pointer;

    transition: 0.5s;

    :hover {
        background-color: #fff;
        color: gray;
    }

    span {
        font-family: "Poppins";
        font-size:18px;
        font-weight: 300;
        padding-right: 65px;
    }

    svg {
        font-size: 30px;
    }
`;