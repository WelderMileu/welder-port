import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 60px;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-family: "Poppins";
        font-weight: 200;
        font-size: 20px;
        text-align: center;
        line-height: 33px;
        color: #838383;
    }
`;
export const Next = styled.div`
    background-color: #3D737D;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-top: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 40px;
        color: #fff;
    }
`;
