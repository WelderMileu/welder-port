import { FaHeadset, FaPhone } from 'react-icons/fa'
import { Header, Container, Logo, Menu, Icon, Contato } from './style.jsx'

export const Nav = () => {
    return (
        <Header>
            <div>
                <Logo>
                    <FaHeadset />
                </Logo>
            </div>

            <Container>
                <Menu>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Contato</a></li>
                </Menu>
            </Container>

            <Contato>
                <span>(031) 0000-0000</span>
                <Icon>
                    <FaPhone />
                </Icon>
            </Contato>
        </Header>
    )
}

