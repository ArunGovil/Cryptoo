import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Crypto = ({ simplified }) => {
    const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  console.log(cryptos);
  return (
    <div>
      <Row gutter={[32, 32]} className="crypto-card-continer">
        {cryptos.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.key}
          >
            <Link to={"./crypto/${currency.id"}>
              <Card
                title={currency.rank, currency.name}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
              >
                <p>Price: {millify(currency.price)} </p>
                <p>Market Cap: {millify(currency.marketCap)} </p>
                <p>Daily Change: {millify(currency.change)} </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Crypto;
