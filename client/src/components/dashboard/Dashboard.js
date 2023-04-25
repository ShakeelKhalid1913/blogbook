import React from 'react'
import Blogs from './Blogs'
import CreateBlog from './CreateBlog'
import Profile from './Profile'
import { Layout, Tabs } from 'antd'
import AuthService from '../../services/auth.service'
import Error from '../layouts/Error'

function Dashboard (props) {
  const currentUser = AuthService.getCurrentUser()

  return currentUser
    ? (
      <Layout className='mx-5'>
        <Tabs
          defaultActiveKey='1'
          tabPosition='left'
          items={[
            { label: 'Blogs', key: '1', children: <Blogs user_id='all' /> },
            { label: 'Create Blog', key: '2', children: <CreateBlog /> },
            { label: 'Profile', key: '3', children: <Profile /> },
            {
              label: 'My Blogs',
              key: '4',
              children: (
                <Blogs username={currentUser.username} user_id={currentUser.id} />
              )
            }
          ]}
        />
      </Layout>
      )
    : (
      <Error
        status='403'
        message='Sorry, you are not authorized to access this page.'
      />
      )
}

export default Dashboard
