import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Payment = () => {
  const payfabric_key = localStorage.getItem('payfabric_key');
  const token = localStorage.getItem('token');
  return (
    <>
      <Row>
        <Col className="text-center">
          <h3>Payment</h3>
          <p>
            The PayFabric API allows provides the capability to emped
            a payment page into your application to allow users to
            process transactions.
          </p>
          <p>
            The <code>token</code> and <code>key</code> are required
            to load the payment page.
          </p>

          <p>
            <strong>Sandbox Endpoint: </strong>
            <code>
              https://sandbox.payfabric.com/Payment/Web/Transaction/Process?key=KEY&token=TOKEN
            </code>
            <br />
            <strong>Example: </strong>
            <code>
              https://sandbox.payfabric.com/Payment/Web/Transaction/Process?key=24060406231520&token=2:4un8duluxizk
            </code>
            <br />
            <strong>API Documentation Reference: </strong>
            <code>
              https://github.com/PayFabric/Hosted-Pages/blob/master/Sections/Payment%20Page.md
            </code>
            <br />
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <iframe
            title="hosted payment page"
            frameborder="0"
            allowfullscreen="true"
            style={iframeStyles}
            src={`https://sandbox.payfabric.com/Payment/Web/Transaction/Process?key=${payfabric_key}&token=${token}`}></iframe>
        </Col>
      </Row>
    </>
  );
};

const iframeStyles = {
  position: 'absolute',
  top: 400,
  left: 300,
  width: '70%',
  height: '100%',
};

export default Payment;
