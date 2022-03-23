import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    padding-top: 250px;

    @media (max-width: 500px) {
        padding-top: 180px;
    }
`;

export const Description = styled.div`
    max-width: 600px;
    
    h1 {
        font-size: 72px;
        font-weight: 500;
        color: var(--color-green-light);
        line-height: 75px;

        span:nth-child(1) {
            color: var(--color-gray-smlight);
        }

        span:nth-child(2) {
            text-decoration-line: line-through;
        }

        @media (max-width: 500px) {
            font-size: 50px;
            line-height: 50px;
        }
    }

    p {
        font-size: 24px;
        font-weight: 300;
        color: var(--color-gray-light);
        margin-top: 30px;
        max-width: 460px;

        @media (max-width: 500px) {
            font-size: 20px;
        }
    }

    @media (max-width: 500px) {
        max-width: 100% !important;
    }
`;

export const GroupButton = styled.div`
    max-width: 430px;
    margin-top: 60px;

    display: grid;
    button:nth-child(1) {
        grid-area: "um";
    }

    button:nth-child(2) {
        grid-area: "dois";

        @media (max-width: 500px) {
            width: 100% !important;
        }
    }

    div:nth-child(4) {
        width: 200px;
        grid-area: "tres";
        display: flex;
        justify-content: flex-end;

        button {
            width: 60px;
        }

        @media (max-width: 500px) {
            width: 100%;
        }
    }

    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    grid-template-areas: 
        "um dois"
        ". tres"; 

    grid-gap: 20px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
        grid-template-areas: 
        "um"
        "dois"
        "tres" !important;    
    }
`;

export const Ilustrator = styled.div`
    width: 50%;

    img {
        width: 100%;
    }

    @media (max-width: 500px) {
        display: none;
    }
`;
