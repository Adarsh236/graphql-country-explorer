import {
  countriesReducer,
  setFilter,
} from "../features/countries/countries-slice";

describe("countries slice", () => {
  test("should return the initial state", () => {
    expect(countriesReducer(undefined, { type: "" })).toEqual({
      filter: "",
    });
  });

  test("should handle setFilter", () => {
    const initialState = { filter: "" };
    const nextState = countriesReducer(initialState, setFilter("US"));
    expect(nextState.filter).toBe("US");
  });
});
