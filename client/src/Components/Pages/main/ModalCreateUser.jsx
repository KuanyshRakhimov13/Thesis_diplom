import { Modal, Button, Row, Col, Input, Select, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import foodJSON from './foods.json';

const { Item, useForm } = Form;

const ModalCreateUser = ({ isActive, onClose, setCreatedUser }) => {
    const [foodOptions, setFoodOptions] = useState([]);
    const [form] = useForm();

    useEffect(() => {
        if (foodJSON.foods.length === 0) return;

        setFoodOptions(
            foodJSON.foods.map((food, index) => {
                return { value: index + 1, label: food.name };
            }),
        );
    }, [foodJSON]);

    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                const { name, food } = values;
                const currentFood = foodJSON.foods.filter((_, index) => index + 1 === food);

                setCreatedUser({ userName: name, mainFood: currentFood[0] });

                form.resetFields();
            })
            .catch((error) => {
                console.error('Form validation error:', error);
            });

        onClose();
    };

    return (
        <Modal
            open={isActive}
            onOk={form.submit} // Use form.submit to trigger form validation and submission
            onCancel={onClose}
            cancelText="Отменить"
            okText="Создать"
        >
            <Form form={form} onFinish={handleOk}>
                <Row>
                    <h2>Создание нового юзера</h2>
                </Row>
                <Row align="middle">
                    <Col xs={7}>
                        <p style={{ marginTop: -10 }}>Впишите имя</p>
                    </Col>
                    <Col xs={16}>
                        <Item
                            name="name"
                            rules={[{ required: true, message: 'пожалуйста впишите имя' }]}
                        >
                            <Input />
                        </Item>
                    </Col>
                </Row>
                <Row align="top">
                    <Col xs={7}>
                        <p style={{ marginTop: 5 }}>Выберите блюдо</p>
                    </Col>
                    <Col xs={16}>
                        <Item
                            name="food"
                            rules={[{ required: true, message: 'Пожалуйста выберите блюдо' }]}
                        >
                            <Select style={{ width: '100%' }} options={foodOptions} />
                        </Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default ModalCreateUser;
