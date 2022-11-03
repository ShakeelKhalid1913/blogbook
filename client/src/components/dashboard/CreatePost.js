import React, {useState} from 'react';
import {Button, Form, Layout, Modal, Upload} from "antd";
import {Input} from "antd/es";
import TextArea from "antd/es/input/TextArea";
import {InboxOutlined} from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";

function CreatePost(props) {
   const [form] = Form.useForm();
   const [previewVisible, setPreviewVisible] = useState(false);
   const [image, setImage] = useState("");
   const [fileList, setFileList] = useState([]);

   const beforeUpload = file => {
      if (file.type === 'image/png' || file.type === 'image/jpeg'){
         return Promise.reject("File is not image");
      }
      return Upload.LIST_IGNORE;
   }

   const handlePreview = file => {
      console.log(file.thumbUrl)
      setImage(file.thumbUrl)
      setPreviewVisible(true)
   }

   const handleUpload = ({fileList}) => {
      console.log(fileList)
      setFileList(fileList)
   }

   const handleCancel = () => {
      setPreviewVisible(false)
   }

   const onFormFinish = (event) => {
      let formData = new FormData();
      // add one or more of your files in FormData
      // again, the original file is located at the `originFileObj` key
      formData.append("file", fileList[0].originFileObj);

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
                         if (!value || value.length >= 100)
                            return Promise.resolve();
                         return Promise.reject(new Error("Length must be least 100"))
                      }
                   })
                ]}>
                   <TextArea rows={4} placeholder={"Enter Content"}/>
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" rules={[
                   {required: true, message: " Please Upload Content"}
                ]}>
                   <Dragger multiple={false} accept={'/upload.do'} listType="picture-card"
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
                 footer={null}
                 onCancel={handleCancel}
             >
                <img alt="value" style={{width: "100%"}} src={image}/>
             </Modal>
          </Layout>
       </>
   );
}

export default CreatePost;