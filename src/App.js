import './App.css';
import React from 'react';
import InputMedicine from './components/InputMedicine';
import MedicineList from './components/MedicineList';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; 

const { Header, Footer, Content } = Layout;



function App() {
  return (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Medicine List</Menu.Item>
        <Menu.Item key="2">nav2</Menu.Item>
        <Menu.Item key="3">nav3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>Medicine</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
	  						<div
							style={{
								backgroundColor: '#01223F',
								height: '50px',
								color: 'white',
								alignItems: 'center',
								textAlign: 'center',
								padding: '10px',
								fontSize: '20px',
							}}
						>
							MEDICINE TABLE
						</div>
						<MedicineList />
						<InputMedicine />
	  </div>
    </Content>
    <Footer style={{ textAlign: 'center' ,marginTop:"50px"}}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
