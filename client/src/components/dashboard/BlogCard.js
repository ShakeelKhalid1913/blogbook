import React from 'react'
import {List, Skeleton, Space, Tag} from "antd"
import {LikeOutlined, MessageOutlined, StarOutlined, TwitterOutlined} from "@ant-design/icons"
import Avatar from "antd/es/avatar/avatar"

function BlogCard(props) {
   const IconText = ({icon, text}) => (
       <Space>
          {React.createElement(icon)}
          {text}
       </Space>
   )

   return (
       <>
          <List.Item actions={[
             <IconText icon={StarOutlined} text="156" key="1"/>,
             <IconText icon={LikeOutlined} text="156" key="2"/>,
             <IconText icon={MessageOutlined} text="2" key="3"/>
          ]} extra={<img src={props.image} width={172} alt={"Image"}/>}>
             <Skeleton avatar active loading={false}>
                <List.Item.Meta
                    avatar={
                       <Avatar style={{color: 'red', backgroundColor: '#fde3cf'}}>S</Avatar>
                    }
                    title={<a href={props.item.href}>{props.item.title}</a>}
                    description={props.item.description}/>
                {props.item.content}
             </Skeleton>
          </List.Item>
       </>
   )
}

export default BlogCard