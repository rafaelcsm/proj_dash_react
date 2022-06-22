import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
//import { BiCog } from "react-icons/bi";


import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  
    
    const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? "Dash" : "Dashboard Financeiro"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
              <NavLink to="/">Home </NavLink>
              </MenuItem>
              <MenuItem icon={<FaList />}><NavLink to="/quemsomos">Quem Somos</NavLink></MenuItem>
              <MenuItem icon={<RiPencilLine /> } ><NavLink to="/faleconosco">Fale Conosco</NavLink></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem>Rafael Martini &copy;2022</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;