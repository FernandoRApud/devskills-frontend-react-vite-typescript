import { Layout } from 'antd';
import React, { Children } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './DashboardLayout.css';

const { Content } = Layout;

export default function DashboardLayout ({ children } : { children: React.ReactNode }) {
  Children.toArray(children);
  return (
    <Layout>
      <Header/>
      <Content
        className="site-layout-background minimalHeight"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        {children}
      </Content>
      <Footer />
    </Layout>
  );
}
