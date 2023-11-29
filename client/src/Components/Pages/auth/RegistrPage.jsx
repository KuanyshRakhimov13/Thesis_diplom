import { Form, Input, Button, Card, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import "../style.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../../store/slices/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if the registration is successful, go to page cards
  const handleSubmit = async (values) => {
    const { username, password } = values;

    try {
      await dispatch(fetchRegister({ username, password }));
      // cards navigation
      navigate("/cards");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row justify="center" align="middle" className="loginBlock">
      <Card title="Registration" className="loginCard">
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Row className="linkBlock">
            <a href="/login"> I have an account</a>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="loginButton">
              Registration
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default RegisterPage;
