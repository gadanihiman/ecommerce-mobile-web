/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string } from "prop-types";
import { Form, Input, Button, Checkbox } from 'antd';

import { Container, Title, ButtonSection } from './styled';
import SocialLogin from './SocialLogin';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const LoginForm = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Title>
        LOGIN
      </Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <ButtonSection>
            <Checkbox>Remember me</Checkbox>
            <Button
              style={{ backgroundColor: '#424242' }}
              type="primary"
              htmlType="submit"
            >
              Sign In
            </Button>
          </ButtonSection>
        </Form.Item>
      </Form>
      <SocialLogin />
    </Container>
  );
};


LoginForm.propTypes = {
  username: string.isRequired,
  password: string.isRequired,
  remmemberMe: string.isRequired,
}

export default LoginForm;
