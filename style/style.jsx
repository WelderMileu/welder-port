import styled from 'styled-components'

export const Container = styled.div`
    padding-left: 50px;
    padding-right: 50px;
`;

export const Button = styled.button`
    max-width: 200px;
    min-width: 70px;
    padding-left: 20px;
    padding-right: 20px;
    height: 65px;
    background-color: #50838E;

    border: none;
    border-radius: 5px;

    font-size: 24px;
    font-weight: 400;
    color: white;
`;

export const ButtonOutline = styled.button`
    max-width: 200px;
    min-width: 70px;
    padding-left: 20px;
    padding-right: 20px;
    height: 65px;
    background-color: white;

    border: 1px solid #50838E;
    border-radius: 5px;

    font-size: 24px;
    font-weight: 400;
    color: #50838E;
`;
