import { useState, useEffect } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import postman_token_create from '../images/postman_token_create.png';

const SecurityToken = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    fetch('https://sandbox.payfabric.com/payment/api/token/create', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        Authorization:
          '2:86c76aa9-b700-460c-a69f-c0b194f0279b|TSEvaluation@001',
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.Token);
        setToken(data.Token);
      });
  }, []);
  return (
    <Row>
      <Col className="text-center">
        <h3>PayFabric API Authentication</h3>
        <p>
          To make requests to the PayFabric API, you need to
          authenticate first. The required credentials{' '}
          <code>DCN</code>, <code>Device ID</code>, and{' '}
          <code>Device Password</code> are provided by PayFabric via
          the web portal on the Device Management page. After
          successfully authenticating with the PayFabric API, you will
          receive a security token that you can use to make requests
          to the API.
        </p>
        <p>
          For testing purposes, you can use the sandbox API. The
          sandbox API is a test environment that simulates the
          PayFabric production environment. You can use the sandbox
          API to test your integration without processing live
          transactions.
        </p>
        <p>
          <strong>Sandbox Endpoint: </strong>
          <code>
            https://sandbox.payfabric.com/payment/api/token/create
          </code>
          <br />
          <strong>Device ID: </strong>
          <code>2:86c76aa9-b700-460c-a69f-c0b194f0279b</code>
          <br />
          <strong>Device Password: </strong>
          <code>TSEvaluation@001</code>
          <br />
        </p>
        <p>
          <Image
            alt="postman token create"
            src={postman_token_create}
            thumbnail
          />
        </p>
      </Col>
      <Col className="text-center">
        <h3>Token</h3>
        <p>
          <code>{token}</code>
        </p>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(token);
          }}>
          Copy
        </Button>
      </Col>
    </Row>
  );
};
export default SecurityToken;
