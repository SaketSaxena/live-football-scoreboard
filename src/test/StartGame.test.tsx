import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import StartGame from "../component/StartGame";

describe("StartGame", () => {
  afterEach(cleanup);

  const renderComponent = () => render(<StartGame />);

  it("should render start game components ", () => {
    const { getAllByRole, getByRole } = renderComponent();
    expect(getAllByRole("textbox")[0]).toBeInTheDocument();
    expect(getAllByRole("textbox")[1]).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });
});
