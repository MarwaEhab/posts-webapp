import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoadBtn from "../components/loadBtn";

test("handle onClick", () => {
  const onClick = jest.fn();
  render(<LoadBtn onClick={onClick} title="load Item" />);
  const buttonElement = screen.getByText("load Item");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
