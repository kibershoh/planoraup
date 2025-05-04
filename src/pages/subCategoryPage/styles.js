import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  padding: 40px 20px;
  margin: 0 auto;
  width:80%;
  @media (max-width: 768px) {
     margin-top:20px;
     width:95%;
       padding: 10px;

     
  }

`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const ArtistList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top:30px;
 @media (max-width: 768px) {
      grid-template-columns: auto;

   
  }
`;

export const ArtistCard = styled(Link)`
   
      background:#F5F5F5;
  border-radius: 12px;
  padding: 10px;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s ease;

  &:hover {
      background:#e9e6e6;

  }
`;

export const ArtistImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ArtistName = styled.h2`
  font-size: 16px;
  padding:5px 0;
`;
export const ArtistPlace = styled.p`
  font-size: 14px;
  color: green;
`;
export const ArtistPrice = styled.p`
  font-size: 14px;
  color:#444;

`;
export const SearchInput = styled.input`
  font-size: 14px;
  border:1px solid #777;
  border-radius:4px;
  height:30px;
  outline:none;

`;
export const ButtonProfile = styled.button`
width:100%;
padding:5px;
border-radius:5px;
margin-top:6px;
  font-size: 14px;
  color:#fff;
  text-align:center;
  background:#7A922E;
  border:none;
  &:hover{
    background:#789127;
  }


`;



export const FilterButton = styled.button`
display:flex;
gap:5px;
  padding: 8px 12px;
  background-color: #f5f5f5;
  color: #000;
  border: 1px solid #777;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  height:30px;
  &:hover{
    background:#999;
  }
`;

export const FilterPanel = styled.div`
position:absolute;
top:50px;
width:290px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-left:auto;
  
`;

export const CheckboxLabel = styled.label`
  display: flex;
  // align-items: start;
  gap: 12px;
  font-size: 16px;
`;
export const FilterSearch = styled.div`
position:relative;
  display: flex;
  justify-content:end;
  gap: 8px;
  font-size: 14px;
  @media (max-width: 768px) {
   margin-top:30px;   
  }
`;
