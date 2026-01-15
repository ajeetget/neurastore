import { useEffect } from "react";
import { Grid } from "./ProductGrid.styles";
import { useDispatch, useSelector } from "react-redux";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../features/products/productsThunk";
import {selectFilteredProducts, selectProductsStatus} from "../../features/products/productsSelectors";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const status = useSelector(selectProductsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <>     
      <SearchFilter />  
       
      {status === "loading" && <p>Loading...</p>}

      <Grid>
      {products.map((pitem) => (
        <ProductCard key={pitem.id} item={pitem} />
      ))}
    </Grid>
    </>
  );
};

export default ProductList;

