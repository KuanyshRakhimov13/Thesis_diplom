import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './style.css';
import { DingtalkOutlined } from '@ant-design/icons';

const Index = () => {
    const [isActive, setIsActive] = useState('main');

    const navigate = useNavigate();

    const handleLink = (type) => {
        if (type === 'main') {
            navigate('/main');
        }
        if (type === 'about') {
            navigate('/about');
        }
        if (type === 'contacts') {
            navigate('/contacts');
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
                    onClick={() => handleLink('main')}
                    type={isActive === 'main' ? 'primary' : null}
                    className="buttons"
                >
                    Main
                </Button>
                <Button
                    onClick={() => handleLink('about')}
                    type={isActive === 'about' ? 'primary' : null}
                    className="buttons"
                >
                    About
                </Button>
                <Button
                    onClick={() => handleLink('contacts')}
                    type={isActive === 'contacts' ? 'primary' : null}
                    className="buttons"
                >
                    Contacts
                </Button>
            </Col>
        </Row>
    );
};

export default Index;
