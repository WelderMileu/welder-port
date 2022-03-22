import { FaApple, FaCoins, FaDesktop, FaSitemap, FaMobileAlt } from 'react-icons/fa'
import { Container } from '../../../style/style';
import { Card, Content, Header } from './style';

const data = [
    {
        "icon": FaDesktop,
        "title": "Desktop",
        "text": "reader will be distracted by the readable ." 
    },
    {
        "icon": FaMobileAlt,
        "title": "Mobile First",
        "text": "reader will be distracted by the readable ." 
    },
    {
        "icon": FaApple,
        "title": "Responsive",
        "text": "reader will be distracted by the readable ." 
    },
    {
        "icon": FaSitemap,
        "title": "Back-End",
        "text": "reader will be distracted by the readable ." 
    },
    {
        "icon": FaCoins,
        "title": "DataBase",
        "text": "reader will be distracted by the readable ." 
    }
]

const Plus = () => (
    <Container>
        <Content>
            <Header>
                <h1>áreas de <span>atuacão</span></h1>
            </Header>

            { data.map((Item) =>
                <Card> 
                    <Item.icon />
                    <h4>{ Item.title }</h4>
                    <p>{ Item.text }</p>
                </Card>
            )}
        </Content>
    </Container>
)

export default Plus;
