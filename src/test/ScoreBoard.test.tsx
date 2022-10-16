import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScoreBoard from "../component/ScoreBoard";
import { ScoreBoardType } from "../types";

describe("ScoreBoard", () => {
  afterEach(cleanup);
  const scoreBoard: ScoreBoardType[] = [
    {
      homeTeam: { name: "A", score: 23 },
      awayTeam: { name: "B", score: 5 },
    },
  ];
  const renderComponent = () => render(<ScoreBoard scoreBoard={scoreBoard} />);

  it("should render score board ", () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole("row")).toHaveLength(2);
  });

  it("should render column header correctly ", () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole("columnheader")).toHaveLength(3);
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
});
