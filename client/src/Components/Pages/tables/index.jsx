import { Card, Col, Menu, Row, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

// structure of table
const columns = [
  {
    title: "Name",
    dataIndex: "title",
    render: (value) => <b>{value}</b>,
  },
  {
    title: "Fat",
    dataIndex: "fat",
  },
  {
    title: "Carbs",
    dataIndex: "carbs",
  },
  {
    title: "Protein",
    dataIndex: "protein",
  },
];

const days = ["breakfast", "lunch", "snack", "dinner"];

const Index = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Monday");
  const [meelOfWeek, setMeelOfWeek] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const check = useSelector((state) => state.auth);


  useEffect(() => {
    if (!id) return;
    fetchMeel();
  }, [id]);

//get data from back-end
  const fetchMeel = async () => {
    setLoading(true);
    try {
      const meel = await axios.get(`http://localhost:8080/food/food/${id}`);

      setLoading(false);
      setMeelOfWeek(meel.data);
    } catch (error) {
      console.log(error);
    }
  };

  // generates the tables
  const generateCards = (day) => {
    return meelOfWeek
      .filter((item) => item.day_of_week === day)
      .map((item, index) => {
        return (
          <Col xs={20} key={index}>
            <Card
              title={<h1>{item.day_of_week}</h1>}
              style={{ border: "1px solid black" }}
            >
              {days.map((day, innerIndex) => (
                <Row
                  key={innerIndex}
                  align="top"
                  style={innerIndex !== 0 ? { marginTop: 40 } : {}}
                >
                  <Col xs={5}>
                    <h2 style={{ marginTop: 0 }}>{item[day].title}</h2>
                  </Col>
                  <Col xs={19}>
                    <Table
                      columns={columns}
                      dataSource={item[day].types}
                      pagination={false}
                      bordered={true}
                    />
                  </Col>
                </Row>
              ))}
            </Card>
          </Col>
        );
      });
  };

  // day of week
  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  return (
    <Col xs={24}>
      <Row>
        <Col>
          <Menu
            mode="vertical"
            selectedKeys={[selectedMenuItem]}
            onClick={handleMenuClick}
            defaultOpenKeys={"Monday"}
          >
            <Menu.Item key="Monday">Monday</Menu.Item>
            <Menu.Item key="Tuesday">Tuesday</Menu.Item>
            <Menu.Item key="Wednesday">Wednesday</Menu.Item>
            <Menu.Item key="Thursday">Thursday</Menu.Item>
            <Menu.Item key="Friday">Friday</Menu.Item>
            <Menu.Item key="Saturday">Saturday</Menu.Item>
            <Menu.Item key="Sunday">Sunday</Menu.Item>
          </Menu>
        </Col>
        <Col xs={19}>
          <Row justify="center" style={{ marginTop: 50 }}>
            {loading ? (
              <Spin
                spinning={loading}
                size="large"
                style={{ marginTop: 200 }}
              />
            ) : (
              generateCards(selectedMenuItem)
            )}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Index;
