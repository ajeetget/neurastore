import React from 'react';
import { useNavigate } from "react-router-dom";
import { ItemWrapper, ImageBox, Title, Category, Price, Image, Content, Meta } from './ProductCard.styles';

const ProductCard = ({item}) => {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <ItemWrapper onClick={handleClick}>
        <ImageBox>  <Image src={item.image} alt={item.title} /> </ImageBox>
        <Content>
            <Title>{item.title}</Title>
            <Meta>
                <Category>{item.category}</Category>
                <Price>₹ {item.price}</Price>
            </Meta>
        </Content>
    </ItemWrapper>
  )
}

export default ProductCard

