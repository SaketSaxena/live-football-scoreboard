import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ScoreBoardType } from "../types";
import UpdateScore from "../component/UpdateScore";

describe("UpdateScore", () => {
  afterEach(cleanup);
  const updateScoreBoard = jest.fn(() => {});
  const scoreBoard: ScoreBoardType[] = [
    {
      gameNumber: 1,
      homeTeam: { name: "A", score: 23 },
      awayTeam: { name: "B", score: 5 },
    },
  ];
  const renderComponent = () =>
    render(
      <UpdateScore
        updateScore={scoreBoard}
        updateScoreBoard={updateScoreBoard}
      />
    );

  it("should render update score components ", () => {
    const { getAllByRole, getByRole } = renderComponent();
    expect(getAllByRole("textbox")[0]).toBeInTheDocument();
    expect(getAllByRole("textbox")[1]).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should be able to click on update score button", () => {
    const { getByRole } = renderComponent();
    const button = getByRole("button");
    fireEvent.click(button);
  });
});
