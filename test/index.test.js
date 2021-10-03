import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Homepage from "../pages/index";

describe("Homepage", () => {
  it("renders a heading", () => {
    render(<Homepage />);

    const heading = screen.getByRole("heading", {
      name: /Home Page/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
