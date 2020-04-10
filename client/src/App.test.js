import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import PlayerList from "./components/PlayerList";

test("renders App without crashing", () => {
  render(<App />);
});
test("header loads", () => {
  const { getByText } = render(<App />);
  getByText(/womens world cup/i);
});

test("render dark mode", () => {
  const { getByText } = render(<App />);
  getByText(/dark mode/i);
});
