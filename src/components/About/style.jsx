import styled from 'styled-components'

export const Content = styled.div`
    margin-top: 120px;
`;

export const GroupContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column !important;
    }
`;

export const Avatar = styled.div`
    div {
        margin-top: 10px;
        width: 300px;
        display: flex;
        justify-content: flex-end;

        button {
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            margin-left: 10px;
            width: 70px;
            height: 70px;
            
            svg {
                font-size: 40px !important;
            }
        }
    }
    
`;

export const Description = styled.div`
    padding-right: 150px;

    button {
        margin-top: 30px;
        font-size: 18px;
        font-weight: 500;
        svg {
            margin-right: 10px;
        }
    }

    @media (max-width: 500px) {
        width: 100% !important;
        padding-right: 0;
        margin-top: 60px;
    }
`;

export const AboutMe = styled.div`
    max-width: 600px;

    p {
        display: flex;
        align-items: center;

        height: 230px;
        padding: 30px;    
        font-size: 24px;
        font-weight: 300;
        color: var(--color-gray-light);

        border-radius: 20px;
        border: 1px solid var(--color-gray-smlight);
        
        @media (max-width: 500px) {
            font-size: 18px;
        }
    }

    @media (max-width: 500px) {
        max-width: 100% !important;
    }
`;
