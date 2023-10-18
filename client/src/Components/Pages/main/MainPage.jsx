import { Button, Col, Input, Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import './style.css';
import foodJSON from './foods.json';
import ModalCreateUser from './ModalCreateUser';

const MainPage = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '2%',
        },
        {
            title: 'Имя',
            dataIndex: 'name',
        },
        {
            title: 'Блюдо',
            dataIndex: 'food',
        },
        {
            title: 'Белки',
            dataIndex: 'proteins',
        },
        {
            title: 'Жиры',
            dataIndex: 'fats',
        },
        {
            title: 'Углеводы',
            dataIndex: 'carbohydrates',
        },
        {
            title: 'action',
            render: (value) => {
                return <Button onClick={() => handleShow(value)}>Показать</Button>;
            },
        },
    ];

    const [modalActive, setModalActive] = useState(false);
    const [createdUser, setCreatedUser] = useState(null);
    const [dataSource, setDataSource] = useState([]);

    const addUser = () => {
        setModalActive(true);
    };

    const handleShow = (value) => {
        console.log('u tapped on', value.name);
        console.log(foodJSON);
    };

    useEffect(() => {
        if (!createdUser) return;

        const currentUser = {
            id: dataSource.length + 1,
            name: createdUser.userName,
            food: createdUser.mainFood.name,
            proteins: createdUser.mainFood.proteins,
            fats: createdUser.mainFood.fats,
            carbohydrates: createdUser.mainFood.carbohydrates,
        };

        setDataSource([...dataSource, currentUser]);
    }, [createdUser]);

    return (
        <Col xs={24}>
            <ModalCreateUser
                isActive={modalActive}
                onClose={() => setModalActive(false)}
                setCreatedUser={setCreatedUser}
            />

            <Row justify="center">
                <Col xs={22} className="mainTable">
                    <Table
                        columns={columns}
                        rowKey="id"
                        dataSource={dataSource}
                        footer={() => (
                            <Row justify="end">
                                <Button type="primary" onClick={() => addUser()}>
                                    Добавить пользователя
                                </Button>
                            </Row>
                        )}
                    />
                </Col>
            </Row>
        </Col>
    );
};

export default MainPage;
