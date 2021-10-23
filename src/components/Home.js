import React from 'react'
import millify from 'millify';
import { Row, Col, Statistic, Typography } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import { Crypto, News } from '../components';

const { Title } = Typography;

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    if (isFetching) return ('Loading...');
    return (
        <div>
            <Title level={2} className="heading">Global Crypto Status</Title>
            <Row>
                <Col span={12}><Statistic title="Total Crypto" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 cryptos</Title>
                <Title level={3} className="show-more"><Link to="/currency">Show more</Link> </Title>
            </div>
            <Crypto />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto Updates</Title>
                <Title level={3} className="show-more"><Link to="/news">Show more</Link> </Title>
            </div>
            <News />
        </div>
    )
}

export default Home
