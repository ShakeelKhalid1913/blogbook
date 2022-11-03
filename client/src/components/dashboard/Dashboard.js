import React from 'react'
import Blogs from "./Blogs"
import CreatePost from "./CreatePost"
import Profile from "./Profile"
import {Layout, Tabs} from "antd"
import AuthService from "../../services/auth.service"
import Error from "../layouts/Error"

function Dashboard(props) {
   const currentUser = AuthService.getCurrentUser();

   return (
       currentUser ?
           <Layout className={"mx-5"}>
              <Tabs defaultActiveKey={"1"} tabPosition={"left"} items={[
                 {label: "Blogs",key:"1", children:<Blogs/>},
                 {label: "Create Blog",key:"2", children:<CreatePost/>},
                 {label: "Profile",key:"3", children:<Profile/>},
                 {label: "My Blogs",key:"4", children:<Blogs/>},
              ]}/>
           </Layout>
           :
           <Error status={"403"} message={"Sorry, you are not authorized to access this page."}/>
   )
}

export default Dashboard