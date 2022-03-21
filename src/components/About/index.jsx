import { FaLinkedin, FaGithubAlt, FaDownload } from 'react-icons/fa'

import { Container, Button, ButtonOutline } from "../../../style/style";
import { Content, Avatar, Description, AboutMe, GroupContent } from './style'

import avatar from '../../assets/avatar.png'

const About = () => (
    <Content>
        <Container>
            <GroupContent>
                <Avatar>
                    <img src={avatar} alt="" />
                    <div>
                        <div>
                            <Button>
                                <FaLinkedin />
                            </Button>
                            <ButtonOutline>
                                <FaGithubAlt />
                            </ButtonOutline>
                        </div>
                    </div>
                </Avatar>

                <Description>
                    <AboutMe>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </AboutMe>
                    <ButtonOutline>
                        <FaDownload />
                        Download CV
                    </ButtonOutline>
                </Description>
            </GroupContent>
        </Container>
    </Content>
)

export default About;
