import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

it("renders without crashing", () => {
  const { getByText } = render(<App />)
  expect(getByText("What a Bastard!")).toBeInTheDocument()
})
