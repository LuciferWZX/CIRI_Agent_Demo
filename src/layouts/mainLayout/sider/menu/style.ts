import styled from 'styled-components';
export const StyledMenu = styled.div`
  position: relative;
  .active {
    width: 300px;
  }
  .toggle-active {
    content: '\\f053';
  }
`;
export const Navigator = styled.div`
  position: relative;
  height: 420px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
`;
export const NavUl = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
export const NavLi = styled.li`
  position: relative;
  list-style: none;
  width: 100%;
  :hover {
    background: #efefef;
    a {
      position: relative;
      width: 100%;
      display: block;
      text-decoration: none;
      color: #6843d1;
      font-weight: 500;
      .title {
        position: relative;
        display: block;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
      }
    }
  }
`;
export const Toggle = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  right: -20px;
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  cursor: pointer;
  border: 5px solid #6843d1;
  border-radius: 50%;
  :before {
    content: '\\f054';
    //font-family: fontAwesome;
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 35px;
    text-align: center;
    font-size: 16px;
    color: #6843d1;
  }
`;
