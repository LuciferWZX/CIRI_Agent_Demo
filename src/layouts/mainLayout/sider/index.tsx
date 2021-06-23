import React, { FC, memo } from 'react';
import { StyledSider } from '@/layouts/mainLayout/sider/style';
import SiderMenu from '@/layouts/mainLayout/sider/menu';

const MainSider: FC = () => {
  return (
    <StyledSider width={80}>
      <SiderMenu />
    </StyledSider>
  );
};
export default memo(MainSider);
