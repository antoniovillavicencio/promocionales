import React, {useState} from "react"

import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { menuData } from "../data/MenuData"

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} menuData={menuData}/>
      <Header toggle={toggle} menuData={menuData}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
