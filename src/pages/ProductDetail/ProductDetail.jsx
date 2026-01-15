import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../features/favorites/favoritesSlice";
import { fetchProductById } from "../../features/products/productsThunk";

import {Wrapper, Container, ImageWrapper, Image, Content, Title, Description,
  Price, Rating, Stars, RatingCount,} from "./ProductDetail.styles";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, status } = useSelector(
    (state) => state.products
  );

  const isFavorite = useSelector((state) =>
    state.favorites.items.some(
      (fav) => fav.id === Number(id)
    )
  ); 
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.title}
          />
        </ImageWrapper>

        <Content>
          <Title>{selectedProduct.title}</Title>

          <Rating>
            <Stars>
              {"★".repeat(
                Math.round(selectedProduct.rating?.rate || 0)
              )}
              {"☆".repeat(
                5 -
                  Math.round(
                    selectedProduct.rating?.rate || 0
                  )
              )}
            </Stars>
            <RatingCount>
              ({selectedProduct.rating?.count || 0} reviews)
            </RatingCount>
          </Rating>

          <Description>
            {selectedProduct.description}
          </Description>

          <p>Category: {selectedProduct.category}</p>

          <Price>₹ {selectedProduct.price}</Price>

          <button
            aria-pressed={isFavorite}
            onClick={() =>
              isFavorite
                ? dispatch(
                    removeFromFavorites(
                      selectedProduct.id
                    )
                  )
                : dispatch(
                    addToFavorites(selectedProduct)
                  )
            }
          >
            {isFavorite
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ProductDetail;
