import { FaArrowDown } from 'react-icons/fa'
import { Container, Next } from './style'

export const Abaut = () => {
    return (
        <Container>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <Next>
                <FaArrowDown />
            </Next>
        </Container>
    )
}
