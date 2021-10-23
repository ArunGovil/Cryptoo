import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, FundOutlined, BulbOutlined, HomeOutlined, MoneyCollectOutlined} from '@ant-design/icons';
import icon from '../images/cryptoo.png';

const NavBar = () => {
    return (
        <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoo</Link>
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/currency">Crypto</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchange">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
        </div>
    )
}

export default NavBar
