// src/components/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { allData } from '../../data';
import { Container, Images, SubcategoryCard, SubcategoryList, SubcategoryName, Title } from './styles';


const CategoryPage = () => {
  const { categoryPath } = useParams();

  const category = allData?.find(cat => cat.path === categoryPath);

  if (!category) {
    return <Container><p>Kategoriya topilmadi!</p></Container>;
  }

  return (
    <Container>

      <SubcategoryList>
        {category.subcategories.map(sub => (
          <SubcategoryCard
            key={sub.id}
            to={`/${category.path}/${sub.path}`}
          >
            <Images src={sub.icon} alt="" />
            <SubcategoryName>{sub.name}</SubcategoryName>
          </SubcategoryCard>
        ))}
      </SubcategoryList>
    </Container>
  );
};

export default CategoryPage;
