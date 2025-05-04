import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allData } from '../../data';
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { IoFilterOutline } from "react-icons/io5";

const SubcategoryPage = () => {
  const { categoryPath, subCategoryPath } = useParams();

  const category = allData?.find(cat => cat.path === categoryPath);
  const subcategory = category?.subcategories.find(sub => sub.path === subCategoryPath);

  if (!subcategory) {
    return <Container><p>Subkategoriya topilmadi!</p></Container>;
  }


  // SearchTerm
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [checkedPlaces, setCheckedPlaces] = useState([]);

  const uniquePlaces = [...new Set(subcategory.artists.map(artist => artist.places))];

  const handleCheckboxChange = (place) => {
    setCheckedPlaces(prev =>
      prev.includes(place)
        ? prev.filter(p => p !== place)
        : [...prev, place]
    );
  };

  const filteredArtists = subcategory.artists.filter(artist => {
    const matchName = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPlace = checkedPlaces.length === 0 || checkedPlaces.includes(artist.places);
    return matchName && matchPlace;
  });
  return (
    <Container>



      <FilterSearch>
        <SearchInput
          type="text"
          placeholder="Qoshiqchini qidiring..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <FilterButton onClick={() => setShowFilter(!showFilter)}>
          <IoFilterOutline />
          Filter
        </FilterButton>

        {showFilter && (
          <FilterPanel>
            {uniquePlaces.map((place, index) => (
              <CheckboxLabel key={index}>
                <input
                  type="checkbox"
                  checked={checkedPlaces.includes(place)}
                  onChange={() => handleCheckboxChange(place)}
                />
                {place}
              </CheckboxLabel>
            ))}
          </FilterPanel>
        )}
      </FilterSearch>
      <ArtistList>
        {filteredArtists.map(artist => (
          <ArtistCard
            key={artist.id}
            to={`/${category.path}/${subcategory.path}/${artist.slug}`}
          >
            <ArtistImage src={artist.image} alt={artist.name} />
            <ArtistPlace>{artist.places}</ArtistPlace>
            <ArtistName>{artist.name}</ArtistName>
            <ArtistPrice>{artist.price}</ArtistPrice>
            <ButtonProfile> Profilega o'tish <HiMiniArrowRightEndOnRectangle /> </ButtonProfile>
          </ArtistCard>
        ))}
      </ArtistList>
    </Container>
  );
};

export default SubcategoryPage;
