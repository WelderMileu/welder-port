import { FaHeadset, FaPhone } from 'react-icons/fa'
import { Header, Container, Logo, Menu, Icon } from './style.jsx'

export const Nav = () => {
    return (
        <Header>
            <Container>
                <Logo>
                    <FaHeadset />
                </Logo>
            </Container>

            <Container>
                <Menu>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Contato</a></li>
                </Menu>
            </Container>

            <Container>
                <Icon>
                    <FaPhone />
                </Icon>
                <span>(031)00000-0000</span>
            </Container>
        </Header>
    )
}

