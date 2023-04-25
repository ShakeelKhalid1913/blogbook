import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  Navigate
} from 'react-router-dom'
import NavBar from './components/layouts/NavBar'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import FooterLayout from './components/layouts/FooterLayout'
import Dashboard from './components/dashboard/Dashboard'
import { Layout } from 'antd'
import AuthService from './services/auth.service'
import Error from './components/layouts/Error'
import AuthVerify from './services/auth-verify'

const { Content } = Layout

function App () {
  const currentUser = AuthService.getCurrentUser()

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <>
      <BrowserRouter>
        <Layout className='site-layout-background page-layout'>
          <NavBar />
          <Content className='content-wrap'>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <Navigate
                    to={currentUser !== null ? '/dashboard' : '/home'}
                  />
                }
              />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/auth' element={<Auth />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route
                exact
                path='*'
                element={
                  <Error
                    status='404'
                    message='Sorry, the page you visited does not exist.'
                  />
                }
              />
            </Routes>
          </Content>
          <FooterLayout />
          <AuthVerify logout={logOut} />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
