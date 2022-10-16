import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StartGame from "../component/StartGame";

describe("StartGame", () => {
  afterEach(cleanup);
  const updateScoreBoard = jest.fn(() => {});
  const renderComponent = () =>
    render(<StartGame updateScoreBoard={updateScoreBoard} />);

  it("should render start game components ", () => {
    const { getAllByRole, getByRole } = renderComponent();
    expect(getAllByRole("textbox")[0]).toBeInTheDocument();
    expect(getAllByRole("textbox")[1]).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should be able to click on start new button", () => {
    const { getByRole } = renderComponent();
    const button = getByRole("button");
    fireEvent.click(button);
  });
});
