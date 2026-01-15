import { screen, fireEvent } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import { renderWithProviders } from "./test-utils";

test("user can add product to favorites", async () => {
  renderWithProviders(
    <Routes>
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>,
    {
      route: "/product/1",
      preloadedState: {
        products: {
          items: [
            {
              id: 1,
              title: "Test Product",
              category: "electronics",
              price: 100,
              image: "test.jpg",
              description: "Test description",
            },
          ],
          status: "succeeded",
          error: null,
        },
        favorites: {
          items: [],
        },
      },
    }
  );

  const favButton = await screen.findByRole("button", {
    name: /add to favorites/i,
  });

  fireEvent.click(favButton);

  expect(
    screen.getByRole("button", { name: /remove from favorites/i })
  ).toBeInTheDocument();
});
