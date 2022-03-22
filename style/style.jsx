import styled from 'styled-components'

export const Container = styled.div`
    padding-left: 100px;
    padding-right: 100px;
`;

export const Button = styled.button`
    max-width: 200px;
    min-width: 70px;
    padding-left: 20px;
    padding-right: 20px;
    height: 65px;
    background-color: var(--color-green-light);

    border: none;
    border-radius: 5px;

    font-size: 24px;
    font-weight: 400;
    color: var(--color-white);
`;

export const ButtonOutline = styled.button`
    max-width: 200px;
    min-width: 70px;
    padding-left: 20px;
    padding-right: 20px;
    height: 65px;
    background-color: var(--color-white);

    border: 1px solid var(--color-green-light);
    border-radius: 5px;

    font-size: 24px;
    font-weight: 400;
    color: var(--color-green-light);
`;
