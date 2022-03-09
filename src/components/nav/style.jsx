import styled from 'styled-components'

export const Header = styled.header`
    width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
`;

export const Container = styled.div``;

export const Logo = styled.div`
    width: 100px;
    height: 100px;
    background-color: #17B295;

    display: flex;
    justify-content: center;
    align-items: center;


    border-radius: 100px;
    border-bottom-left-radius: 30px;

    transform: rotate(316deg);

    svg {
        color: white;
        font-size: 50px;
        transform: rotate(42deg) !important;
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    margin-right: 700px;

    li {
        padding-left: 15px;
        
        a {
            font-size: 20px;
            font-family: 'Roboto';
            color: gray;
            text-decoration: none;
            font-weight: 300;
        }
    }
`;

export const Contato = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-right: 20px;
        
        font-size: 20px;
        font-family: 'Roboto';
        font-weight: 300;
        color: gray;
    }
`;

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-color: #17B295;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;

    svg {
        color: white;
        font-size: 24px;
        transform: rotate(90deg);
    }
`;








