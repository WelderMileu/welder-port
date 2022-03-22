import { FaNodeJs, FaReact, FaCss3, FaHtml5, FaDocker, FaFigma } from 'react-icons/fa'

import { Container } from '../../../style/style';
import { Content, Icon, GroupIcons } from './style' 

const data = [FaNodeJs, FaReact, FaCss3, FaHtml5, FaDocker, FaFigma];

const SoftSkill = () => (
    <Container>
        <Content>
            <GroupIcons>
                { data.map((Item) => 
                    <Icon>
                        <Item />
                    </Icon> 
                )}
            </GroupIcons>
        </Content>
    </Container>
)

export default SoftSkill;
