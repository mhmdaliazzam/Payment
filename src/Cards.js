import React from 'react'
import './cards.css'
import env from 'dotenv';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import StripeCheckout from 'react-stripe-checkout'

const Cards = () => {
  return (
    <div>
      <h1 className='head'>Pricing Glint</h1>

      <div className='cardGroup'>

        <Card className='cards' id=''>
          <Card.Header className='text-center cardheader'>Single</Card.Header>
          <Card.Body>
            <Card.Title className='price'>
              $ <span>19</span>.99
            </Card.Title>
            <ListGroup className='mb-3 text-center'>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Premium Support</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Template Updates</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> For 1 month</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faXmark} style={{ color: 'red' }} /> Access all templates</ListGroup.Item>
            </ListGroup>
            <div className='subs-btn'>
              {/* <Button variant="dark">Subscribe</Button> */}
              <StripeCheckout
                className="d-flex align-items-center"
                stripeKey={process.env.STRIPE_API}
              />
            </div>
          </Card.Body>
        </Card>

        <Card className='cards' id='membership'>
          <Card.Header className='text-center cardheader'>Membership</Card.Header>
          <Card.Body>
            <Card.Title className='price'>
              $ <span>149</span>.99
            </Card.Title>
            <ListGroup className='mb-3 text-center'>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Premium Support</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Template Updates</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> For 1 year</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Access all templates</ListGroup.Item>
            </ListGroup>
            <div className='subs-btn'>
              <StripeCheckout
                className="d-flex align-items-center"
                stripeKey={process.env.STRIPE_API}
              />
            </div>
          </Card.Body>
        </Card>

        <Card className='cards'>
          <Card.Header className='text-center cardheader'>Lifetime</Card.Header>
          <Card.Body>
            <Card.Title className='price'>
              $ <span>349</span>.99
            </Card.Title>
            <ListGroup className='mb-3 text-center'>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Premium Support</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Template Updates</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> For life</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Access all templates</ListGroup.Item>
            </ListGroup>
            <div className='subs-btn'>
              <StripeCheckout
                className="d-flex align-items-center"
                stripeKey={process.env.STRIPE_API}
              />
            </div>
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}

export default Cards