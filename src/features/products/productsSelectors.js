import { createSelector } from "@reduxjs/toolkit";

export const selectAllProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

export const selectFilteredProducts = createSelector(
  [
    selectAllProducts,
    (state) => state.filters.search,
    (state) => state.filters.category,
    (state) => state.filters.sort,
  ],
  (products, search, category, sort) => {
    let filtered = products;
    
    if (search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
   
    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (sort === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }
);
