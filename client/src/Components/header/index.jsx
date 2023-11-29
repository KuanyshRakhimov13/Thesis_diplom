import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
import { DingtalkOutlined } from "@ant-design/icons";

const Index = () => {
  const [isActive, setIsActive] = useState("cards");

  const navigate = useNavigate();

  const handleLink = (type) => {
    if (type === "table") {
      navigate("/table");
    }
    if (type === "about") {
      navigate("/about");
    }
    if (type === "cards") {
      navigate("/cards");
    }

    setIsActive(type);
  };

  return (
    <Row align="middle" justify="space-between" className="headerBlock">
      <Col xs={3}>
        <Row justify="center" className="icon">
          <DingtalkOutlined />
        </Row>
      </Col>
      <Col>
        <Button
          onClick={() => handleLink("cards")}
          type={isActive === "cards" ? "primary" : null}
          className="buttons"
        >
          Cards
        </Button>
        <Button
          onClick={() => handleLink("about")}
          type={isActive === "about" ? "primary" : null}
          className="buttons"
        >
          About
        </Button>
      </Col>
    </Row>
  );
};

export default Index;
