import React, { useState } from "react";
import styled from "styled-components";

function NavBar() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="logo.svg" />
      </a>
      <Menu></Menu>
      <RightMenu>
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">SignIn</a>
        <a href="#">SignOut</a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerStatus(true)}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </CustomMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}>
            <img src="times-circle-solid.svg" alt="closebar" />
          </CustomClose>
        </CloseWrapper>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">SignIn</a>
        </li>
        <li>
          <a href="#">SignOut</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
const Menu = styled.div``;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    left: ;
    flex-wrap: nowrap;
    text-decoration: none;
    color: white;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const CustomMenu = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: hsl(219, 30%, 18%);
  width: 250px;
  z-index: 10px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateY(100%)")};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled.div`
  img {
    width: 20px;
    height: auto;
    cursor: pointer;
  }
`;
