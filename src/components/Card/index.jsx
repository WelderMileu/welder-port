import { FaGithub, FaLinkedin, FaWpforms } from 'react-icons/fa'
import {
    Container,
    Group,
    Image,
    Content,
    Author,
    Cubo,
    Sociais,
    Gmail_Button } from './style'
import User from '../../assets/user.jpg'

export const Card = () => {
    return (
        <Container>
            <Group>
                <Image>
                    <img src={User} alt="" />
                </Image>
                <Content>
                    <Author>
                        <h1>Jhony</h1>
                        <span>Design</span>
                    </Author>
                    <Sociais>
                        <Cubo>
                            <FaGithub />
                        </Cubo>
                        <Cubo>
                            <FaLinkedin />
                        </Cubo>
                    </Sociais>
                </Content>
            </Group>
            <Gmail_Button>
                <FaWpforms />
                <span>Curriculo Open</span>
            </Gmail_Button>
        </Container>
    )
}
