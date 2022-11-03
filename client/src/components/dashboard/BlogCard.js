import React from 'react'
import pic from '../../home.svg'
import {Card, Col, List, Row, Skeleton, Space} from "antd"
import Icon from "antd/es/icon"
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons"
import Avatar from "antd/es/avatar/avatar"

function BlogCard(props) {
   const IconText = ({icon, text}) => (
       <Space>
          {React.createElement(icon)}
          {text}
       </Space>
   )

   return (
       <Skeleton loading={false}>
          <List.Item actions={[
             <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
             <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
             <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>
          ]} extra={<img src={props.image} width={272} alt={"Image"}/>}>
             <List.Item.Meta
                 avatar={
                    <Avatar style={{ color: 'red', backgroundColor: '#fde3cf' }}>S</Avatar>
                 }
                 title={<a href={props.item.href}>{props.item.title}</a>}
                 description={props.item.description}/>
             {props.item.content}
          </List.Item>
       </Skeleton>
   )
}

export default BlogCard