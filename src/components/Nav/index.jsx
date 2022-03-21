import Logo from '../../assets/logo.svg'
import { Container } from '../../../style/style'
import { Content } from './style'

const Nav = () => (
    <Content>
        <Container>
            <img src={Logo} alt="" />
        </Container>
    </Content>

)

export default Nav;
