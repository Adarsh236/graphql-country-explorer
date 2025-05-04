import { render, screen } from "@testing-library/react";
import { CountryTable } from "../components/organisms/country-table";

type Country = { code: string; name: string };

const sampleData: Country[] = [
  { code: "US", name: "United States" },
  { code: "FR", name: "France" },
];

describe("CountryTable", () => {
  test("renders headers and rows", () => {
    render(<CountryTable data={sampleData} />);

    // Check headers
    expect(screen.getByText(/Name/)).toBeInTheDocument();
    expect(screen.getByText(/Code/)).toBeInTheDocument();

    // Check rows
    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("US")).toBeInTheDocument();
    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getByText("FR")).toBeInTheDocument();
  });

  test("renders no rows when data is empty", () => {
    render(<CountryTable data={[]} />);
    // Only headers, no cell text
    const cells = screen.queryAllByRole("cell");
    expect(cells).toHaveLength(0);
  });
});
