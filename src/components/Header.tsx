import { useState } from "react";
import styled from "styled-components";

const HeadWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding-top: 30px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
`;
const HeadInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Logo = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: #000;
  padding-bottom: 15px;
`;
const NavWrapper = styled.div`
  display: inline-block;
  padding-bottom: 25px;
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const NavLi = styled.li`
  a {
    font-size: 20px;
    padding: 0 40px;
    color: #fff;
  }
`;
const NavBtn = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    width: 30px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span {
      display: block;
      width: 30px;
      height: 4px;
      background: #000;
    }
  }
`;
const NavMenuWrapper = styled.div`
  width: 1200px;
  display: none;
  justify-content: end;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px 0;
  position: absolute;
  left: 0;
  bottom: -200px;
  ${NavWrapper}:hover & {
    display: flex;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    bottom: -190px;
    padding: 20px;
    &.menuOn {
      display: flex !important;
    }
    &.menuOff {
      display: none !important;
    }
  }
`;
const NavMenu = styled.ul``;
const NavMenuLi = styled.li`
  a {
    display: inline-block;
    font-size: 20px;
    padding: 10px 40px;
    color: #fff;
  }
  @media screen and (max-width: 700px) {
    a {
      font-size: 18px;
      padding: 10px 10px;
    }
  }
`;

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const onClick = () => {
    setMenuToggle((mneuToggle) => !menuToggle);
  };
  return (
    <HeadWrapper>
      <HeadInner>
        <Logo>
          <img src="/img/hd_logo.png" alt="" />
        </Logo>
        <NavWrapper>
          <Nav>
            <NavLi>
              <a href="#none">manu</a>
            </NavLi>
            <NavLi>
              <a href="#none">manu</a>
            </NavLi>
            <NavLi>
              <a href="#none">manu</a>
            </NavLi>
            <NavLi>
              <a href="#none">manu</a>
            </NavLi>
            <NavLi>
              <a href="#none">manu</a>
            </NavLi>
          </Nav>
          <NavBtn onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
          </NavBtn>
          <NavMenuWrapper className={menuToggle ? "menuOn" : "menuOff"}>
            <NavMenu>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
            </NavMenu>
            <NavMenu>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
            </NavMenu>
            <NavMenu>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
            </NavMenu>
            <NavMenu>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
            </NavMenu>
            <NavMenu>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
              <NavMenuLi>
                <a href="#none">menu</a>
              </NavMenuLi>
            </NavMenu>
          </NavMenuWrapper>
        </NavWrapper>
      </HeadInner>
    </HeadWrapper>
  );
}

export default Header;
