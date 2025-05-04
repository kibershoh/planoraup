import React from 'react'
import { Button, Card, Categorie, Container, Image,  NameLogo, StyledLink, Title } from './styles'
import { MdChevronRight } from "react-icons/md";
import { data } from '../../data';

const Categories = () => {

    return (
        <>
            <Categorie>
                <Container>
                    {data?.map(item => (
                             <StyledLink key={item.id} to={item.path}>
                             <Card>
                        
                            <NameLogo>
                                <Image src={item.image} alt={item.name} />
                                <Title>{item.name}</Title>
                            </NameLogo>
                           <Button>
                             <MdChevronRight size={25} />
                           </Button>
                           </Card>
                             </StyledLink>
                    ))}
                </Container>

            </Categorie>
        </>
    )
}

export default Categories