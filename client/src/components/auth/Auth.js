import React, { useState } from 'react'
import { Alert, Button, Col, Form, Layout, Row, Space } from 'antd'
import { Input } from 'antd/es'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../services/auth.service'

function Auth (props) {
  const [form] = Form.useForm()
  const formRef = React.createRef()
  const [type, setType] = useState('Login')
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success'
  })
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    const user = {
      email: form.getFieldValue('email'),
      password: form.getFieldValue('password')
    }
    if (type === 'Signup') {
      user.username = form.getFieldValue('username')
      await AuthService.register(user).then(
        (res) => {
          setAlert({
            show: true,
            message: res.data,
            type: 'success'
          })
        },
        (err) => {
          setAlert({
            show: true,
            message: `${err.response.data.message}`,
            type: 'error'
          })
        }
      )
    } else {
      await AuthService.login(user).then(
        () => {
          navigate('/dashboard')
          window.location.reload()
        },
        (err) => {
          setAlert({
            show: true,
            message: `${err.response.data}`,
            type: 'error'
          })
        }
      )
    }
  }

  return (
    <Layout>
      <Row className='justify-content-center text-start'>
        <Col md={7}>
          <Layout>
            <h1>{type}</h1>
            <hr />
            <Form
              ref={formRef}
              form={form}
              layout='vertical'
              onFinish={handleSubmit}
            >
              {type === 'Signup'
                ? (
                  <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Username required' }]}
                  >
                    <Input />
                  </Form.Item>
                  )
                : null}
              <Form.Item
                label='Email'
                name='email'
                rules={[{ required: true, message: 'Email required' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Password required' }]}
              >
                <Input.Password />
              </Form.Item>
              {type === 'Signup'
                ? (
                  <Form.Item
                    name='cpassword'
                    label='Confirm Password'
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your password'
                      },
                      ({ getFieldValue }) => ({
                        validator (_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject(
                            new Error('Password does not match')
                          )
                        }
                      })
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  )
                : (
                    ''
                  )}
              <Form.Item>
                <Space size={10}>
                  <Button name='submit' type='primary' htmlType='submit'>
                    {type}
                  </Button>
                  <Button
                    type='primary'
                    onClick={(e) => {
                      setType(type === 'Login' ? 'Signup' : 'Login')
                      formRef.current.resetFields()
                    }}
                  >
                    Switch to {type === 'Login' ? 'Signup' : 'Login'}
                  </Button>
                </Space>
              </Form.Item>
            </Form>
            {alert.show && (
              <Alert message={alert.message} type={alert.type} showIcon />
            )}
          </Layout>
        </Col>
      </Row>
      <Layout>{/* <ContactMe/> */}</Layout>
    </Layout>
  )
}

export default Auth
