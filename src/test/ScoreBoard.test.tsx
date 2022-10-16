import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScoreBoard from "../component/ScoreBoard";
import { ScoreBoardType } from "../types";

describe("ScoreBoard", () => {
  afterEach(cleanup);
  const finishGame = jest.fn(() => {});
  const setUpdateScore = jest.fn(() => {});
  const scoreBoard: ScoreBoardType[] = [
    {
      gameNumber: 1,
      homeTeam: { name: "A", score: 23 },
      awayTeam: { name: "B", score: 5 },
    },
  ];
  const renderComponent = () =>
    render(
      <ScoreBoard
        scoreBoard={scoreBoard}
        finishGame={finishGame}
        setUpdateScore={setUpdateScore}
      />
    );

  it("should render score board ", () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole("row")).toHaveLength(2);
  });

  it("should render column header correctly ", () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole("columnheader")).toHaveLength(4);
    expect(getAllByRole("columnheader")[0]).toHaveTextContent("#");
    expect(getAllByRole("columnheader")[1]).toHaveTextContent("Home Team");
    expect(getAllByRole("columnheader")[2]).toHaveTextContent("Away Team");
  });

  it("should render data correctly ", () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole("rowheader")[0]).toHaveTextContent("1");
    expect(getAllByRole("cell")[0]).toHaveTextContent("A - 23");
    expect(getAllByRole("cell")[1]).toHaveTextContent("B - 5");
  });

  it("should be able to click on finsh game", () => {
    const { getAllByRole } = renderComponent();
    const button = getAllByRole("cell")[2];
    fireEvent.click(button);
  });
});
