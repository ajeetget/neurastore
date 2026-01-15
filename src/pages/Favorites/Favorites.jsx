import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../features/favorites/favoritesSlice";
import {
  PageWrapper, Grid, Card, Image, Title, Price, EmptyState, Content,
  Meta,} from "./Favorites.styles";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return <EmptyState>No favorite products yet ❤️</EmptyState>;
  }

  return (
    <PageWrapper>
      <h1>My Favorites</h1>

      <Grid>
        {favorites.map((item) => (
          <Card key={item.id}>
            <Image src={item.image} alt={item.title} />
            <Content>
              <Title>{item.title}</Title>
              <Meta>                            
                <Price>₹ {item.price}</Price>
                <button  onClick={() => dispatch(removeFromFavorites(item.id))}>
                  Remove
                </button>
              </Meta>
            </Content>       
          </Card>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Favorites;
