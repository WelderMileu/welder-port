import styled from 'styled-components'

export const Content = styled.div`
    margin-top: 170px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Header = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 90px;

    h1 {
        text-transform: uppercase;
        color: #50838E;

        span {
            color: #CCCCCC;
        }
    }
`;

export const Card = styled.div`
    width: 385px;
    height: 297px;
    margin: 20px;

    border: 1px solid #CCCCCC;
    border-radius: 10px;

    padding: 30px;

    svg {
        color: #50838E;
        font-size: 73.33px;
    }

    h4 {
        margin-top: 20px;
        color: #50838E;
        font-size: 24px;       
    }

    p {
        margin-top: 20px;
        font-size: 24px;
        color: #838383;
        font-weight: 300;
    }
`;
