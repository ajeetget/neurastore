import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../features/favorites/favoritesSlice";

import {Wrapper, Container, ImageWrapper, Image, Content, Title, Description,
  Price, Rating,Stars,RatingCount,
} from "./ProductDetail.styles";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === Number(id))
  );

  const isFavorite = useSelector((state) =>
    state.favorites.items.some((fav) => fav.id === Number(id))
  );

  if (!product) return <p>Loading...</p>;

  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image src={product.image} alt={product.title} />
        </ImageWrapper>

        <Content>
          <Title>{product.title}</Title>
          <Rating>
            <Stars>
              {"★".repeat(Math.round(product.rating?.rate || 0))}
              {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
            </Stars>
            <RatingCount>
              ({product.rating?.count || 0} reviews)
            </RatingCount>
          </Rating>
          <Description>{product.description}</Description>
          <p>Category: {product.category}</p>
          <Price>₹ {product.price}</Price>
          <button  active={isFavorite}
            onClick={() => isFavorite ? dispatch(removeFromFavorites(product.id))
                : dispatch(addToFavorites(product))}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ProductDetail;
