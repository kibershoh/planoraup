import { Link } from "react-router-dom";
import styled from "styled-components";

export const Categorie = styled.div`
  @media (max-width: 768px) {
  }
`;

export const Container = styled.div`
  display:grid;
    grid-template-columns: repeat(4, 1fr);

  gap: 20px;
  padding: 4px 0;
`;

export const NameLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  text-align:center;
  // gap:20px;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
   background:#F5F5F5;

  &:hover {
    background:#e6e4e4;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;
export const Button = styled.div`
  background: transparent;
  text-align: center;
  border: none;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
    background: #f5f5f5;
  }
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 50%;
  background:#fff;
`;

export const Title = styled.h3`
  font-size: 15px;
  margin-top: 10px;
  
`;
