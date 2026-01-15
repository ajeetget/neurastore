import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";

import productsReducer from "../features/products/productsSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import filtersReducer from "../features/filters/filtersSlice";
import { theme } from "../styles/theme";

export const renderWithProviders = (
  ui,
  {
    route = "/",
    preloadedState = {},
  } = {}
) => {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      favorites: favoritesReducer,
      filters: filtersReducer,
    },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[route]}>
          {ui}
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};
