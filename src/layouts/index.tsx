import React, { FC } from 'react';
import { StyledGlobalLayout } from '@/layouts/style';
const Layout: FC = ({ children }) => {
  return <StyledGlobalLayout>{children}</StyledGlobalLayout>;
};
export default Layout;
