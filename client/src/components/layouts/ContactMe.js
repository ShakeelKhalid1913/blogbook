import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Button, Space } from 'antd'

library.add(fab)

function ContactMe (props) {
  return (
    <Row className='justify-content-center py-5 text-center'>
      <h6>Contact me On</h6>
      <Col md={5} className='my-1'>
        <Space>
          <a
            href='https://www.instagram.com/shakee7ahmed/'
            target='_blank'
            rel='noreferrer'
          >
            <Button type='primary' danger>
              <FontAwesomeIcon
                className='mx-1'
                size='lg'
                icon={['fab', 'instagram']}
              />
              Instagram
            </Button>
          </a>
          <a
            href='https://github.com/ShakeelKhalid1913'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              type='primary'
              style={{ backgroundColor: 'black', borderColor: 'black' }}
            >
              <FontAwesomeIcon
                className='mx-1'
                size='lg'
                icon={['fab', 'github']}
              />
              Github
            </Button>
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100012519944758'
            target='_blank'
            rel='noreferrer'
          >
            <Button type='primary'>
              <FontAwesomeIcon
                className='mx-1'
                icon={['fab', 'facebook']}
                size='lg'
              />
              Facebook
            </Button>
          </a>
          <a
            href='https://www.linkedin.com/in/shakeel-ahmed-7057391b5/'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              type='primary'
              style={{ backgroundColor: '#0072b1', borderColor: '#0072b1' }}
            >
              <FontAwesomeIcon
                className='mx-1'
                icon={['fab', 'linkedin']}
                size='lg'
              />
              Linkedin
            </Button>
          </a>
        </Space>
      </Col>
    </Row>
  )
}

export default ContactMe
