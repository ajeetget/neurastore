import productsReducer from "./productsSlice";

describe("productsSlice", () => {
  test("should return initial state", () => {
    const state = productsReducer(undefined, { type: "unknown" });
    expect(state).toEqual({
      items: [],
      selectedProduct: null,
      status: "idle",
      error: null,
    });
  });
});
