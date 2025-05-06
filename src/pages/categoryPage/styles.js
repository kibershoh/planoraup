import styled from 'styled-components'
import {  Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 50px 20px;
  margin: 30px auto;
  width:80%;
  @media (max-width: 768px) {
    width:95%;
    padding: 10px;
    margin:10px auto
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const SubcategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top:10px;
  @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap:8px;
      margin-top:5px;
      
   
  }
`;

export const SubcategoryCard = styled(Link)`
  display: flex;
  align-items:center;
  flex-direction:column;
  border-radius: 12px;
  padding: 15px;
  text-decoration: none;
  color: #000;
  transition: transform 0.2s ease;
  margin-top: 30px;
  background:#F5F5F5;

  &:hover {
    background:#cdcbcb;
  }
`;

export const SubcategoryName = styled.h2`
  font-size: 15px;
  text-align: center;
  color:#000;
`;

export const NavLinks = styled.h2`
  color:red;
`;

export const Images = styled.img`
  width:100px;
  border-radius:50%;

  
`;

