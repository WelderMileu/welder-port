import styled from 'styled-components'

export const Content = styled.div`
    position: fixed;
    width: 100%;
    background-color: var(--color-white);
    
    padding-bottom: 30px;
    padding-top: 30px;

    display: flex;
    align-items: center;

    box-shadow: 10px 20px 10px rgba(0,0,0, 0.1);

    @media (max-width: 500px) {
        padding-bottom: 20px;
        padding-top: 20px;
        
        img {
            width: 150px;
        }
    }
`;
