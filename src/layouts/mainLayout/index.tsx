import React, { FC } from 'react';
import { StyledMainLayout } from '@/layouts/mainLayout/style';
import { Layout } from 'antd';
import MainHeader from '@/layouts/mainLayout/header';
import MainSider from '@/layouts/mainLayout/sider';

const MainLayout: FC = ({ children }) => {
  return (
    <StyledMainLayout>
      <Layout className={'main-layout'}>
        <MainHeader />
        <Layout>
          <MainSider />
          <Layout.Content>{children}</Layout.Content>
        </Layout>
      </Layout>
    </StyledMainLayout>
  );
};
export default MainLayout;
