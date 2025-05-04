import { render, screen, fireEvent } from "@testing-library/react";
import { FilterBar } from "../components/molecules/filter-bar";

describe("FilterBar", () => {
  test("displays the current value and calls onChange", () => {
    const handleChange = vi.fn();
    render(<FilterBar value="ABC" onChange={handleChange} />);

    const input = screen.getByPlaceholderText(/filter by country code/i);
    expect(input).toHaveValue("ABC");

    // Simulate user typing
    fireEvent.change(input, { target: { value: "XYZ" } });
    expect(handleChange).toHaveBeenCalledWith("XYZ");
  });
});
