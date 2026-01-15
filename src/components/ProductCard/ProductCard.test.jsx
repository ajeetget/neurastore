import { screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { renderWithProviders } from "../../test/test-utils";

const mockProduct = {
  id: 1,
  title: "Test Product",
  category: "electronics",
  price: 99,
  image: "test.jpg",
};

test("renders product details and navigates on click", () => {
  renderWithProviders(<ProductCard item={mockProduct} />);

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText(/₹ 99/)).toBeInTheDocument();

  fireEvent.click(screen.getByText("Test Product"));
});
