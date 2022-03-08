import { FaHeadset, FaPhone } from 'react-icons/fa'

export const Nav = () => {
    return (
        <header>
            <div className="logo">
                <div className="icon_logo">
                    <FaHeadset />
                </div>
            </div>

            <div className="menu">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>

            <div className="contato">
                <span>(031)00000-0000</span>
                <div className="icon">
                    <FaPhone />
                </div>
            </div>
        </header>
    )
}

