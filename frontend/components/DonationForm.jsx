import React from 'react';
import {
  InputNumber, Button, Form, Select, Checkbox, Input,
} from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

function DonationForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container mx-auto p-4'>
      <Form
        form={form}
        name='donationForm'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name='donationAmount'
          label='How much you want to donate'
          rules={[{ required: true, message: 'Please enter the donation amount!' }]}
        >
          <InputNumber min={1} max={10000} className='w-full' />
        </Form.Item>

        <Form.Item>
          <div className='flex space-x-4'>
            <Button type='default' htmlType='submit'>
              Proceed by Default
            </Button>
            <Button type='primary' onClick={() => form.resetFields()}>
              Configure Donation Criteria
            </Button>
          </div>
        </Form.Item>

        <Form.Item
          name='donateTo'
          label='Donate to'
          rules={[{ required: true, message: 'Please select a donation category!' }]}
        >
          <Select placeholder='Select a category' className='w-full'>
            <Option value='brain'>Brain</Option>
            <Option value='liver'>Liver</Option>
            <Option value='all'>All</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name='recipientAge'
          label='Recipient Age'
          rules={[{ required: true, message: 'Please enter the recipient age range!' }]}
        >
          <div className='flex space-x-4'>
            <InputNumber min={0} max={100} placeholder='From' className='w-1/2' />
            <InputNumber min={0} max={100} placeholder='To' className='w-1/2' />
          </div>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Done
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default DonationForm;
