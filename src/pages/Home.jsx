import { Container, Row, Col } from "react-bootstrap"
import AppLayout from '../layout/AppLayout.jsx';
import Gallery from '../components/Gallery';

export default function Home () {
    return (
      <AppLayout>
        <Container id='home'>
            <Row>
                <Col>
                    <h2>HOME</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium delectus sint molestiae! Voluptatibus temporibus quae fuga, at nam cum ad quisquam beatae eaque perspiciatis, adipisci natus qui, enim culpa.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque reiciendis labore impedit eveniet deserunt distinctio aliquid dolorem hic veritatis laudantium officia temporibus repellat culpa eum rerum, accusantium ratione a deleniti!</p>
                </Col>
            </Row>
            <Gallery/>
        </Container>
      </AppLayout>
    )
}