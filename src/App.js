import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { NavBar, Home, Crypto, News, Info, Exchanges } from "./components";
import "./App.css";
import { Layout, Typography, Space } from "antd";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/currency">
                <Crypto simplified />
              </Route>
              <Route exact path="/exchange">
                <Exchanges />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/crypto/:coinId">
                <Info />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={4} style={{ color: 'white' }}>
            Cryptoo <br />
            Made with Love
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchanges</Link>
            <Link to="/info">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
