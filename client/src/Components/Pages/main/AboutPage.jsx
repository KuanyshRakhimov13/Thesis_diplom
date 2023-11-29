import React from "react";
import { Button, Col, Row } from "antd";

const AboutPage = () => {
  return (
    <div>
      <Row justify={"center"} style={{ padding: "50px 0px" }}>
        <h1 style={{ color: "Black", font: 30 }}>About page</h1>
      </Row>
      <Row>
        This is the my thesis application, which is aimed to people who are
        interested in nutrition and want to be more healthy and fit
      </Row>
    </div>
  );
};

export default AboutPage;
