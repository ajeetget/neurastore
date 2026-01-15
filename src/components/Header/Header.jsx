import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Wrapper, HeaderContainer, Title, Highlight, Nav,FavoritesLink, Badge
} from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();
  const favoritesCount = useSelector(
    (state) => state.favorites.items.length
  );

  const handleHome = () => {
    navigate("/");
  }

  return (
    <Wrapper>
      <HeaderContainer>
        <Title onClick={handleHome}>
          Neura<Highlight>Store</Highlight>
        </Title>

        <Nav>
          <FavoritesLink to="/favorites">
            ❤️ Favorites
            {favoritesCount > 0 && <Badge>{favoritesCount}</Badge>}
          </FavoritesLink>
        </Nav>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
