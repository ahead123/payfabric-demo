import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Row>
      <Col className="text-center">
        <h3>PayFabric API Demo</h3>
        <Link to="/token/create">Start</Link>
      </Col>
    </Row>
  );
};

export default Home;
