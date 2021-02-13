import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
// import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { useRef, useLayoutEffect } from 'react'


const Header = ({ menuData, toggle }) => {

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >=5) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    })
  })

  return (
    <Nav isTop={isTop}>
      <NavLink to="/">4 Promotional</NavLink>
      <div onClick={toggle}>
        <Bars />
      </div>
      <NavMenu>
        {menuData.map((ref, index) => (
          <NavLink to={ref.link} key={index}>
            {ref.title}
          </NavLink>
        ))}
      </NavMenu>
      {/*<NavBtn>*/}
      {/*  <Button primary round to={"/trips"}>*/}
      {/*    Book a Flight*/}
      {/*  </Button>*/}
      {/*</NavBtn>*/}
    </Nav>
  )
}
export default Header

const Nav = styled.nav`
  background: ${({isTop}) => (isTop ? 'transparent' : '#102027')};
  box-shadow: ${({isTop}) => (!isTop ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' : 'none')};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top: 0;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
