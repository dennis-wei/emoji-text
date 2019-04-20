import React, { Component } from 'react';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";

import EmojiCard from "./EmojiCard"

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Row>
            <Col span={24}>
              <EmojiCard 
                text={"This is some test text"}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
            </Col>
            <Col span={12}>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default App;
