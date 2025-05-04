import styled from 'styled-components';

export const Nav = styled.nav`
  background: #7A922E;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: fixed;
  z-index:1000;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
   @media (max-width: 768px) {
   display:none;
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  border-radius:5px;
`;

export const Brand = styled.a`
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-decoration:none;
  @media (max-width: 768px) {
   color:black;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display:none;
  }
`;

export const CategoryBtn = styled.button`
  background: #889A37;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

export const AddService = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background: ${props => props.transparent ? 'transparent' : 'white'};
  color: ${props => props.transparent ? 'white' : '#7A922E'};
  border: ${props => props.transparent ? '1px solid white' : 'none'};
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-100%'};
  width: 250px;
  height: 100%;
  background: white;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  z-index: 1000;
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: transparent;
`;

export const DrawerLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled.div`
  color: black;
  font-size: 24px;
  cursor: pointer;
`;

export const DrawerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  padding: 20px;
  gap: 10px;
  height:150px;
`;

export const ButtonDrawer = styled.button`
  background: ${props => props.transparent ? 'white' : '#7A922E'};
  color: ${props => props.transparent ? '#7A922E' : 'white'};
  border: ${props => props.transparent ? '1px solid #7A922E' : 'none'};
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;
 export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #ddd;
  display: none;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 999;
    @media (max-width: 768px) {
    display: flex;
  }
`;
 export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #7A922E;
  font-size: 14px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;
 export const CenterResponsive = styled.div`
   display:none;
  @media (max-width: 768px) {
    display: block;
  }
`;

