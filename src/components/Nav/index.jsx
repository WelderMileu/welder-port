import Logo from '../../assets/logo.svg'
import { Container } from '../../../style/style'
import { Content } from './style'

const Nav = () => (
    <Container>
        <Content>
            <img src={Logo} alt="" />
        </Content>
    </Container>
)

export default Nav;
