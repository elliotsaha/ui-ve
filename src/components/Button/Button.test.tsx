import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("components/Button", () => {
  it("renders children", () => {
    const { getByText } = render(<Button>Label</Button>);
    expect(getByText("Label")).toBeInTheDocument();
  });
});
