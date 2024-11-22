import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';

const { Footer, Content } = Layout;




const App = ({ children }) => (
  <Layout>
    <Header >Header</Header>
    <Content>{children}</Content>
  </Layout>
);

export default App;
