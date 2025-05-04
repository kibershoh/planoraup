// Breadcrumb.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  position: relative;
  top: 50px;
  left: 20px;
  padding: 8px;
  font-size: 14px;
  width:50%;
  color: #000;
   @media (max-width: 768px) {
   display:none;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color:#000;
  }
`;

const BreadcrumbText = styled.span`
  font-weight: 600;
  color:#000;
`;

const Separator = styled.span`
  margin: 0 4px;
`;

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  // ✅ bosh sahifa bo'lsa, hech narsa return qilmaymiz
  if (paths.length === 0) return null;

  let fullPath = '';

  return (
    <BreadcrumbContainer>
      <BreadcrumbLink to="/">Kategoriyalar</BreadcrumbLink>
      {paths.length > 0 && <Separator> &gt; </Separator>}
      {paths.map((path, index) => {
        fullPath += '/' + path;
        const isLast = index === paths.length - 1;
        const text = path.charAt(0).toUpperCase() + path.slice(1);

        return (
          <span key={index}>
            {!isLast ? (
              <>
                <BreadcrumbLink to={fullPath}>
                  {decodeURIComponent(text)}
                </BreadcrumbLink>
                <Separator> &gt; </Separator>
              </>
            ) : (
              <BreadcrumbText>{decodeURIComponent(text)}</BreadcrumbText>
            )}
          </span>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
