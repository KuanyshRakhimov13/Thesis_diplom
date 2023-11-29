import { Form, Input, Button, Card, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../store/slices/authSlice";
import "../style.css";
import { useNavigate } from "react-router";

//declaring functional component
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { username, password } = values;

    const test = await dispatch(fetchLogin({ username, password }));

    // If user doesn't have card_id, cards page, if he has to table page
    if (test.payload.data.card_id) {
      navigate(`/table/${test.payload.data.card_id}`);
    } else {
      navigate("/cards");
    }
  };

  // creating the interface for
  return (
    <Row justify="center" align="middle" className="loginBlock">
      <Card title="Login" className="loginCard">
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
            <a href="/register">Create a new account</a>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="loginButton">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default LoginPage;
