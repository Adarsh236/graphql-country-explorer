import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Provider } from "react-redux";

import {
  CountriesDocument,
  CountriesQuery,
} from "../graphql/generated/graphql";
import { BrowserRouter } from "react-router";
import { store } from "../store";
import AppRoutes from "../router/routes";

const mocks = [
  {
    request: { query: CountriesDocument },
    result: {
      data: {
        countries: [
          { code: "US", name: "United States" },
          { code: "CA", name: "Canada" },
        ],
      } as CountriesQuery,
    },
  },
];

describe("App integration", () => {
  test("loads countries and filters via Redux and UI", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Provider>
      </MockedProvider>
    );

    // Initially shows loading
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for data
    await waitFor(() => screen.getByText("United States"));

    // Both countries appear
    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();

    // Filter for CA
    const input = screen.getByPlaceholderText(/filter by country code/i);
    fireEvent.change(input, { target: { value: "CA" } });

    // Only Canada remains
    expect(screen.getByText("Canada")).toBeInTheDocument();
    expect(screen.queryByText("United States")).toBeNull();
  });
});
