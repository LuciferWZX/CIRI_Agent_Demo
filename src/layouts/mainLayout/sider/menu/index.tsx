import React, { FC } from 'react';
import {
  Navigator,
  NavLi,
  NavUl,
  StyledMenu,
  Toggle,
} from '@/layouts/mainLayout/sider/menu/style';
import { AndroidOutlined } from '@ant-design/icons';
const SiderMenu: FC = () => {
  return (
    <StyledMenu>
      <Navigator>
        <NavUl>
          <NavLi>
            <a href="#">
              <span className="icon">
                <AndroidOutlined />
              </span>
              <span className="title">Home</span>
            </a>
          </NavLi>
          <NavLi>
            <a href="#">
              <span className="icon">
                <AndroidOutlined />
              </span>
              <span className="title">Profile</span>
            </a>
          </NavLi>
        </NavUl>
      </Navigator>
      <Toggle />
    </StyledMenu>
  );
};
export default SiderMenu;
