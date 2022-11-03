import React, {useEffect, useState} from 'react'
import BlogCard from "./BlogCard"
import {Card, Col, Image, Layout, List, Row, Space, Tooltip} from "antd"
import pic from "../../home.svg"
import BlogService from "../../services/blog.service"
import {allBlogs} from "../../services/api"

function Blogs(props) {
   const [blogs, setBlogs] = useState([])
   useEffect(() => {
      setBlogs(BlogService.getAllBlogs())
   })
   const data = Array.from({length: 23})
       .map((_, i) => ({
          href: "ABC",
          title: `Blog ${i}`,
          avatar: "",
          description:
              "Computer Scientist",
          content:
              "Some quick example text to build on the card title and make up the bulk of the card's content."
       }))
   return (
       <Layout>
          {

          }
          <List itemLayout={"vertical"} size={"large"} pagination={{pageSize: 10}}
                dataSource={data}
                renderItem={(item) => (
                    <BlogCard key={item.title} item={item} image={pic}/>
                )}
          />
       </Layout>
   )
}

export default Blogs