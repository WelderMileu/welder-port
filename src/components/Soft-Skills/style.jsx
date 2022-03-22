import styled from 'styled-components'

export const Content = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
`;

export const GroupIcons = styled.div`
    border-radius: 20px;
    border: 1px solid var(--color-gray-smlight);

    display: flex;
    flex-direction: row;

    padding: 10px;
`;

export const Icon = styled.div`
    width: 120px;
    height: 120px;
    
    border: 0.5px solid var(--color-green-light);
    border-radius: 20px;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 70px;
        color: var(--color-green-light);
    }
`;


