import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, List, Avatar, Card } from 'antd';
const { Header, Content, Footer } = Layout;

export default class NavBar extends Component {
  render() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Icon type="home" /></Menu.Item>
            <Menu.Item key="2">some icon</Menu.Item>
            <Menu.Item key="3">some icon</Menu.Item>
          </Menu>
        </Header>
    )
  }
}
