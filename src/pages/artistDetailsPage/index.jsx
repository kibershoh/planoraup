import React from 'react';
import { useParams } from 'react-router-dom';
import { allData } from '../../data';
import { MdLocalPhone } from "react-icons/md";
import { MdTextsms } from "react-icons/md";
import { Adress, ArtistImage, ArtistInfo, ArtistLanguages, ArtistName, ArtistPrice, CallBtn, CallSmsButton, Container, PhoneNumber, PlaceArea, SectionOne, SectionThree, SectionTwo, SmsBtn, Span } from './styles';

const ArtistDetailPage = () => {
  const { categoryPath, subCategoryPath, artistSlug } = useParams();  

  const category = allData.find((cat) => cat.path === categoryPath);
  const subcategory = category?.subcategories.find((sub) => sub.path === subCategoryPath);
  const artist = subcategory?.artists.find((a) => a.slug === artistSlug);

  if (!artist) {
    return <Container><p>Artist topilmadi!</p></Container>;
  }

  return (
    <Container>
      <ArtistImage src={artist.image} alt={artist.name} />
        <ArtistName>{artist.name}</ArtistName>
      <ArtistInfo>
        <SectionOne>
          <Span>Telefon raqami:</Span>
          <PhoneNumber>{artist.phoneNumber}</PhoneNumber>
          <br />
          <Span>Xizmat ko'rsatish hududi:</Span>
          <PlaceArea>{artist.places}</PlaceArea>
        </SectionOne>
        <SectionTwo>
          <Span>To'liq manzili:</Span>
          <Adress>{artist.adress}</Adress>
        </SectionTwo>
        <SectionThree>
          <Span>Narxi:</Span>
          <ArtistPrice>{artist.price}</ArtistPrice>
        </SectionThree>
      </ArtistInfo>
      <ArtistLanguages>{artist.info}</ArtistLanguages>
      <CallSmsButton>
        <CallBtn><MdLocalPhone/> Call</CallBtn>
        <SmsBtn><MdTextsms/> SMS</SmsBtn>
      </CallSmsButton>
    </Container>
  );
};

export default ArtistDetailPage;
