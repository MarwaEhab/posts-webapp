import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders routes", () => {
  render(<App />);
  const linkElement = screen.getByText(/SearchResult/i);
  expect(linkElement).toBeInTheDocument();
});
