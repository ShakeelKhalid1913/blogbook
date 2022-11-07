import React, {useState} from 'react';
import {Button, Form, Layout, Modal, notification, Upload} from "antd"
import {Input} from "antd/es";
import TextArea from "antd/es/input/TextArea";
import {InboxOutlined, SmileOutlined} from "@ant-design/icons"
import Dragger from "antd/es/upload/Dragger";
import AuthService from "../../services/auth.service"
import BlogService from "../../services/blog.service"

function CreateBlog(props) {
   const currentUser = AuthService.getCurrentUser();
   const [form] = Form.useForm();
   const [previewVisible, setPreviewVisible] = useState(false);
   const [image, setImage] = useState("");
   const [fileList, setFileList] = useState([]);

   const beforeUpload = file => {
      if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === "image/jpg"){
         return Promise.reject("File is not image");
      }
      return Upload.LIST_IGNORE;
   }

   const handlePreview = file => {
      setImage(file.thumbUrl)
      setPreviewVisible(true)
   }

   const handleUpload = ({fileList}) => {
      setFileList(fileList)
   }

   const handleCancel = () => {
      setPreviewVisible(false)
   }

   const onFormFinish = (event) => {
      let formData = new FormData();
      // add one or more of your files in FormData
      formData.append('image', fileList[0].originFileObj)
      formData.append("title", form.getFieldValue("title"))
      formData.append("content", form.getFieldValue("content"))
      formData.append("user", currentUser.id)

      BlogService.uploadBlog(formData).then(res => {
         notification.open({
            message: 'Notification',
            description:
                `Blog successfully Upload`,
            icon: (
                <SmileOutlined style={{color: "#108ee9"}}/>
            )
         });
      }).catch(err => console.log(err))
   }

   return (
       <>
          <Layout>
             <h1>Create New Blog</h1>
             <hr/>
             <Form form={form} labelCol={{span: 4}} wrapperCol={{span: 16}} onFinish={onFormFinish}
                   layout={'horizontal'}>
                <Form.Item name={"title"} label={"Title"} rules={[
                   {required: true, message: "Title must required"}
                ]}>
                   <Input placeholder={"Enter Title"}/>
                </Form.Item>
                <Form.Item name={"content"} label={"Content"} rules={[
                   {required: true, message: "Content Required"},
                   () => ({
                      validator(_, value) {
                         if (!value || value.length >= 10)
                            return Promise.resolve();
                         return Promise.reject(new Error("Length must be least 10"))
                      }
                   })
                ]}>
                   <TextArea autoSize={{minRows: 3, maxRows: 6}} placeholder={"minimum 10 characters"}/>
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" rules={[
                   {required: false, message: " Please Upload Content"}
                ]}>
                   <Dragger maxCount={1} accept={'/upload.do'} listType="picture-card"
                            fileList={fileList} onPreview={handlePreview}
                            onChange={handleUpload} beforeUpload={beforeUpload}>
                      <p className="ant-upload-drag-icon">
                         <InboxOutlined/>
                      </p>
                      <p className="ant-upload-text">Click or drag Blog Picture to this area to upload</p>
                      <p className="ant-upload-hint">
                         Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                         band files
                      </p>
                   </Dragger>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4}}>
                   <Button type={"primary"} htmlType={"submit"}>Create Blog</Button>
                </Form.Item>
             </Form>
             <Modal
                 open={previewVisible}
                 onCancel={handleCancel}
             >
                <img alt="value" style={{width: "100%"}} src={image}/>
             </Modal>
          </Layout>
       </>
   );
}

export default CreateBlog;