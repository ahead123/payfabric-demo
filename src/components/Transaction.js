import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Image } from 'react-bootstrap';
import postman_transaction_create from '../images/postman_transaction_create.png';
import github_transaction_payload from '../images/github_transaction_payload.png';

const Transaction = () => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    fetch(
      'https://sandbox.payfabric.com/payment/api/transaction/create',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Authorization:
            '2:86c76aa9-b700-460c-a69f-c0b194f0279b|TSEvaluation@001',
        },
        body: JSON.stringify({
          Amount: '29.99',
          BatchNumber: '',
          Currency: 'USD',
          Customer: 'JOHNDOE0001',
          Document: {
            Head: [],
            Lines: [],
            UserDefined: [],
          },
          PayDate: '',
          ReferenceKey: null,
          ReferenceTrxs: [],
          ReqAuthCode: '',
          SetupId: 'EVO US_CC',
          Shipto: {
            City: '',
            Country: '',
            Customer: '',
            Email: '',
            Line1: '',
            Line2: '',
            Line3: '',
            Phone: '',
            State: '',
            Zip: '',
          },
          TrxUserDefine1: '',
          TrxUserDefine2: '',
          TrxUserDefine3: '',
          TrxUserDefine4: '',
          Type: 'Sale',
        }),
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem('payfabric_key', data.Key);
        setKey(data.Key);
      });
  }, []);

  return (
    <>
      <Row>
        <Col className="text-center">
          <h3>Transactions</h3>
          <p>
            The PayFabric API allows you to create and process
            transactions.
          </p>
          <p>
            After a transaction is successfully created the API will
            return a <code>key</code> that you can use to reference
            the transaction and update details of the transaction.
          </p>
          <p>
            The <code>key</code> can also be utilized to embed the
            PayFabric Hosted Payment page in your application.
          </p>
          <p>
            <strong>Sandbox Endpoint: </strong>
            <code>
              https://sandbox.payfabric.com/payment/api/transaction/create
            </code>
            <br />
            <strong>API Documentation Reference: </strong>
            <code>
              https://github.com/PayFabric/APIs/blob/master/PayFabric/Sections/Transactions.md#create-a-transaction
            </code>
            <br />
            <strong>Transaction Data JSON format: </strong>
            <Image
              alt="github transaction payload"
              src={github_transaction_payload}
              thumbnail
            />
            <br />
          </p>
          <p>
            <Image
              alt="postman transaction create"
              src={postman_transaction_create}
              thumbnail
            />
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h3>Key</h3>
          <p>
            <code>{key}</code>
          </p>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(key);
            }}>
            Copy
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col className="text-center">
          <Link to="/token/create">Back</Link>
        </Col>
        <Col className="text-center">
          <Link to="/payment-sheet/create">Next</Link>
        </Col>
      </Row>
    </>
  );
};

export default Transaction;
