import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "../../test/test-utils";

test("renders app title and favorites link", () => {
  renderWithProviders(<Header />);

  expect(screen.getByText(/Neura/i)).toBeInTheDocument();
  expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
});
