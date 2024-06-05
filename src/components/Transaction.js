import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const Transaction = () => {
  const [key, setKey] = useState(null);
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
        setKey(data.key);
      });
  }, []);

  return (
    <Row>
      <Col className="text-center">
        <h3>Create Transaction</h3>
        <p>
          A transaction is a unit of work that is performed against a
          database. It is the actual work that is done, such as
          inserting data, updating data, or deleting data.
        </p>
      </Col>
    </Row>
  );
};

export default Transaction;
