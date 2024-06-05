import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h3>PayFabric API Demo</h3>
        </Col>
      </Row>

      <Row>
        <Col className="mt-5">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Authentication</Card.Title>
              <Card.Text>
                Learn how to authenticate with the PayFabric API.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-5">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Transactions</Card.Title>
              <Card.Text>
                Learn how to create a transaction with the PayFabric
                API.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-5">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Payments</Card.Title>
              <Card.Text>
                Demonstrate how users can make payments using embedded
                payment pages.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5">
          <Link to="/token/create">Start</Link>
        </Col>
      </Row>
    </>
  );
};

export default Home;
