import styled from 'styled-components'

export const Content = styled.div`
    margin-top: 90px;
    display: flex;
`;

export const Description = styled.div`
    max-width: 600px;
    
    h1 {
        font-size: 72px;
        font-weight: 500;
        color: #50838E;
        line-height: 75px;

        span:nth-child(1) {
            color: #BCBCBC;
        }

        span:nth-child(2) {
            text-decoration-line: line-through;
        }
    }

    p {
        font-size: 24px;
        font-weight: 300;
        color: #838383;
        margin-top: 30px;
        max-width: 460px;
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
    }

    div:nth-child(4) {
        width: 200px;
        grid-area: "tres";
        display: flex;
        justify-content: flex-end;

        button {
            width: 60px;
        }
    }

    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    grid-template-areas: 
        "um dois"
        ". tres"; 

    grid-gap: 20px;
`;