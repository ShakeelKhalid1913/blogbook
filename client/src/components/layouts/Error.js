import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

function Error (props) {
  const navigate = useNavigate()
  return (
    <Result
      status={props.status}
      title={props.status}
      subTitle={props.message}
      extra={
        <Button onClick={() => navigate('/')} type='primary'>
          Back Home
        </Button>
      }
    />
  )
}

export default Error
