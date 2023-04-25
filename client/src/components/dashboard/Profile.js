import { Button, Checkbox, Form, Input, Layout } from 'antd'
import React, { useState } from 'react'

const Profile = () => {
  const [formDisabled, setFormDisabled] = useState(true)
  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    console.log(form.getFieldValue('email'))
  }

  const onFormLayoutChange = ({ disabled }) => {
    setFormDisabled(disabled)
  }

  return (
    <Layout>
      <h1>Profile</h1>
      <hr />
      <Checkbox
        checked={formDisabled}
        onChange={(e) => setFormDisabled(e.target.checked)}
      >
        Edit Information
      </Checkbox>
      <Form
        form={form}
        name='profile'
        onFinish={onFinish}
        onValuesChange={onFormLayoutChange}
        disabled={formDisabled}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name='email'
          label='Email'
          rules={[
            { type: 'email', message: 'The email is in-valid' },
            { required: true, message: 'Please enter your email' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
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
                return Promise.reject(new Error('Password does not match'))
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}
export default Profile
