import { FaInternetExplorer } from 'react-icons/fa'
import { Container } from "../../../style/style";
import { Content, Description, GroupButton } from './style'
import { Button, ButtonOutline } from "../../../style/style";
import Laptop from '../../assets/laptop.svg'

const Home = () => (
    <Container>
        <Content>
            <Description>
                <h1>
                    FULLSTACK 
                    <span> IS'NOT </span> 
                    <span>DESIGN</span>
                </h1>
                <p>
                    It is a long established fact that a reader will be distracted byt.
                </p>
                <GroupButton>
                    <Button>
                        Get Started
                    </Button> 
                    <ButtonOutline>
                        Code Github
                    </ButtonOutline>
                    <div></div>
                    <div>
                        <ButtonOutline>
                            <FaInternetExplorer /> 
                        </ButtonOutline>
                    </div>
                </GroupButton>
            </Description>
            <img src={ Laptop } alt="" />
        </Content>
    </Container>
)

export default Home;
