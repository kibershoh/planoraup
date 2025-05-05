import React, { useState } from 'react';
import { FaBars, FaTimes, FaPlus, FaHome } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

import { AddService, BottomNav, Brand, Button, ButtonDrawer, CategoryBtn, Center, CenterResponsive, CloseIcon, Drawer, DrawerButtons, DrawerHeader, DrawerLeft,   Left, Logo, MenuIcon, Nav, NavItem, Right } from './styles';
import logo from "../../assets/logo/logo.webp"
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const location = useLocation();
const navigate = useNavigate()
  const paths = location.pathname.split('/').filter(Boolean);
  const currentPage = paths.length > 0 
    ? decodeURIComponent(paths[paths.length - 1]).charAt(0).toUpperCase() + decodeURIComponent(paths[paths.length - 1]).slice(1) 
    : 'Kategoriyalar';
  return (
    <>
      <Nav>
          <Left>
          <Logo src={logo} alt="logo" /> {/* o'zingizga logo qo'yasiz */}
          <Brand href='/'>PlanoraUp</Brand>
        </Left>
        <MenuIcon onClick={() => setIsOpen(true)}>
       <IoMenuOutline  />
        </MenuIcon>


        <Center>
          <CategoryBtn onClick={()=>navigate('/')}><FaHome /> Kategoriyalar</CategoryBtn>
          <AddService onClick={()=>navigate('/xizmat-qoshish')}><FaPlus /> Xizmat qo'shish</AddService>
        </Center>
        <CenterResponsive>
            <CategoryBtn>{currentPage}</CategoryBtn>
        </CenterResponsive>

        <Right>
          <Button onClick={()=>navigate('/signin')} transparent>Sign In</Button>
          <Button>Sign Up</Button>
          {/* <MenuIcon onClick={() => setIsOpen(true)}><FaBars /></MenuIcon> */}
        </Right>
      </Nav>

      <Drawer isOpen={isOpen}>
        <DrawerHeader>
          <DrawerLeft>
            <Logo src={logo} alt="logo" />
            <Brand>PlanoraUp</Brand>
          </DrawerLeft>
          <CloseIcon onClick={() => setIsOpen(false)}><IoCloseOutline /></CloseIcon>
        </DrawerHeader>

        <DrawerButtons>
          <ButtonDrawer>Sign Up</ButtonDrawer>
          <ButtonDrawer transparent>Sign In</ButtonDrawer>
        </DrawerButtons>
      </Drawer>
       <BottomNav>
        <NavItem>
          <FaHome />
          <span><Link to={'/'}>Kategoriyalar</Link></span>
        </NavItem>
        <NavItem>
          <FaPlus />
          <span onClick={()=>navigate('/xizmat-qoshish')}>Xizmat qo'shish</span>
        </NavItem>
      </BottomNav>
    </>
  );
};

export default Navbar;
 