import React from 'react'
import {Image, List, Skeleton, Space, Tag} from "antd"
import {LikeOutlined, MessageOutlined, StarOutlined, TwitterOutlined} from "@ant-design/icons"
import Avatar from "antd/es/avatar/avatar"
import Paragraph from "antd/es/skeleton/Paragraph"

function BlogCard(props) {
   const blob = new Blob([Int8Array.from(props.blogInfo.image.data.data)], {type: props.blogInfo.image.contentType})
   const image = window.URL.createObjectURL(blob)

   const IconText = ({icon, text}) => (
       <Space>
          {React.createElement(icon)}
          {text}
       </Space>
   )

   return (
       <>
          <List.Item actions={
             !props.loading ?
                 [
                    <IconText icon={StarOutlined} text="156" key="1"/>,
                    <IconText icon={LikeOutlined} text="156" key="2"/>,
                    <IconText icon={MessageOutlined} text="2" key="3"/>
                 ] : null
          } extra={
             !props.loading ? <Image
                     preview={{visible: false}}
                     src={image}
                     width={300}
                     height={200}
                     alt={"nothing"}/>
                 : null
          }>
             <Skeleton avatar active loading={props.loading}>
                <List.Item.Meta
                    avatar={
                       <Avatar style={{color: 'red', backgroundColor: '#fde3cf'}}>S</Avatar>
                    }
                    title={props.blogInfo.title} description={props.username}/>
                <div>
                   {props.blogInfo.content}
                </div>
             </Skeleton>
          </List.Item>
       </>
   )
}

export default BlogCard