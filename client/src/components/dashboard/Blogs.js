import React, {useEffect, useState} from 'react'
import BlogCard from "./BlogCard"
import {Layout, List} from "antd"
import BlogService from "../../services/blog.service"

function Blogs(props) {
   const [blogs, setBlogs] = useState([])
   const [loading, setLoading] = useState(true)

   const templateData = Array.from({length: 10}).map((_, i) => ({
      name: "template"
   }))

   useEffect(() => {
      if (props.user_id !== "all") {
         BlogService.getAllUserBlogs(props.user_id)
             .then(res => {
                setBlogs(res.data.blogs)
                setLoading(false)
             })
             .catch(err => console.log(err.message))
      } else {
         BlogService.getAllBlogs()
             .then(res => {
                let data = []
                if (res.data !== undefined) {
                   res.data.map((key) => {
                      if (key.blogs.length !== 0) {
                         key.blogs.map((blog) => {
                            let blogData = {}
                            blogData["_id"] = blog._id
                            blogData["title"] = blog.title
                            blogData["content"] = blog.content
                            blogData["image"] = blog.image
                            blogData["username"] = key.username
                            blogData["createdAt"] = blog.created_at
                            data.push(blogData)
                         })
                      }
                   })
                   setBlogs(data)
                   setLoading(false)
                }
             })
             .catch(err => console.log(err.message))
      }
   })
   return (
       <Layout>
          <List itemLayout={"vertical"} size={"large"} pagination={{pageSize: 10}}
                dataSource={blogs}
                renderItem={(blog) => (
                    <BlogCard key={blog._id} loading={loading} blogInfo={blog}
                              username={props.user_id !== "all" ? props.username : blog.username}/>
                )}
          />
       </Layout>
   )
}

export default Blogs