import { PlusOutlined } from '@ant-design/icons';
import Layout from '../../components/Layout';
import {
  Button,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import React from 'react';
import MainLayout from '../../components/MainLayout';

const { TextArea } = Input;
// const FormDisabledDemo = () => {
  
const CreateProduct = () => {
    

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <MainLayout/>
          </div>
          <div className="col-md-9">
          <div>
    <h1 className='category-header'>Add Product</h1>
      <Form > 


         <Form.Item label="Product Name:">
          <Input className='proInput' />
        </Form.Item>
        
        <Form.Item label="Select Category" className='proSelect'>
          <Select>
            <Select.Option value="Computer Case">Computer Case</Select.Option>
            <Select.Option value="CPU Fans and Cooling">CPU Fans and Cooling</Select.Option>
            <Select.Option value="Processor">Processor</Select.Option>
            <Select.Option value="Memory (RAM)">Memory</Select.Option>
            <Select.Option value="Motherboard">Motherboard</Select.Option>
            <Select.Option value="Graphics Card">Graphics Card</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Discription" className='textArea'>
          <TextArea rows={3} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Add to Product">
          <Button className='submit'>Submit</Button>
        </Form.Item>
      </Form>
      </div>
          </div>
        </div>
      </div>

    

  </Layout>
  )
}

export default CreateProduct