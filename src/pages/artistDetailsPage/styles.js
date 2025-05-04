import styled from 'styled-components';


export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const ArtistInfo = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  border:1px solid #e0dcdc;
  border-radius:10px;
  margin-bottom:10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`;

export const ArtistImage = styled.img`
  width: 200px;
  height:200px;
  border:3px solid #999;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top:30px;
`;

export const ArtistName = styled.h2`
  font-size: 24px;
`;

export const ArtistBio = styled.p`
  font-size: 16px;
  color: #555;
`;
export const Span = styled.span`
  font-size: 12px;
  color: #555;
`;
export const PhoneNumber = styled.p`
  font-size: 14px;
  color: #000;
`;
export const SectionOne = styled.div`
 display:flex;
 flex-direction:column;
 align-items:start;
 gap:10px;
`;
export const SectionTwo = styled.div`
  display:flex;
 flex-direction:column;
 align-items:start;
 gap:10px;
`;
export const SectionThree = styled.div`
  display:flex;
 flex-direction:column;
 align-items:start;
 gap:10px;
`;
export const PlaceArea = styled.p`
  color:#000;
  font-size:14px;


`;
export const Adress = styled.p`
  color:#000;
  font-size:14px;
`;
export const ArtistPrice = styled.p`
  color:#000;
  font-size:14px;
`;
export const ArtistLanguages = styled.div`
  color:#000;
  font-size:14px;
  text-align:start;
  background:#e0dcdc;
  padding:10px;
  border-radius:5px;


`;
export const CallSmsButton = styled.div`
  color:#000;
  display:flex;
  justify-content:center;
  gap:10px;
  padding:20px;


`;
export const CallBtn = styled.div`
  color:#000;
  font-size:14px;
  text-align:start;
  background:#F5F7F1;
  color:#738832;

  padding:10px;
  border-radius:20px;

&:hover{
  background:#dcdfd7;
}
`;
export const SmsBtn = styled.div`
  color:#000;
  font-size:14px;
  text-align:start;
  background:#F5F7F1;
  color:#738832;

  padding:10px;
  border-radius:20px;
&:hover{
  background:#dcdfd7;
}

`;
