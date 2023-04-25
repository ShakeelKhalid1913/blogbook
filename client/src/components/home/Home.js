import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import home from '../../home.svg'
import ContactMe from '../layouts/ContactMe'

function Home (props) {
  return (
    <>
      <Container fluid style={{ marginTop: '100px' }}>
        <Row>
          <Col md={5} className='offset-1'>
            <div className='text-center mx-5'>
              <h1 style={{ fontSize: '70px' }}>Tell Your Story to the World</h1>
              <p style={{ fontSize: '17px' }}>
                Join with us! Login or Register. Write your story and share!!
              </p>
            </div>
          </Col>
          <Col md={5}>
            <img className='img-fluid' src={home} alt='Home Page' />
          </Col>
        </Row>
        <ContactMe />
      </Container>
    </>
  )
}

export default Home
