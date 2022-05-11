import React, { useState } from 'react';
import {
  Form,
  Input,
  Radio,
  Select,
  Checkbox,
  Button,
} from 'antd';
import './App.css';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    form.resetFields();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
        <Option value="380">+380</Option>
      </Select>
    </Form.Item>
  );
 
  
  return (
    <Form className='Reg-form'
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '375',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="Gender"
        label="Gender"
        rules={[
          {
            message: 'Please pick an item!',
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="Male">Male</Radio.Button>
          <Radio.Button value="Female">Female</Radio.Button>
          <Radio.Button value="Other">Other</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[
          {
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="subscription"
        valuePropName="checked"
        // rules={[
        //   {
  
        //   },
        // ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Do you want take news about our company and products?
        </Checkbox>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="https://www.linkedin.com/in/dmitriy-kozlov-954130230/" target="_blank">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => <RegistrationForm />;