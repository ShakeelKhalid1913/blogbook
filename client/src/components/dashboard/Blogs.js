import React from 'react'
import BlogCard from "./BlogCard"
import {Card, Col, Layout, List, Row, Tooltip} from "antd"
import pic from "../../home.svg"

function Blogs(props) {
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
          <List itemLayout={"vertical"} size={"large"} pagination={{pageSize: 3}}
                dataSource={data}
                renderItem={(item) => (
                    <BlogCard key={item.title} item={item} image={pic}/>
                )}
          />
       </Layout>
   )
}

export default Blogs