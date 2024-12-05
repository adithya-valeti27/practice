import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("testing whether the button is in the document or not", () => {
  render(<Button />);
  const buttonEl = screen.getByText("Click me");
  expect(buttonEl).toBeInTheDocument();
});

// test("testing whether the click stimulates the event handler or not", () => {
//   console.log = jest.fn(); // Mock console.log
//   render(<Button />);

//   // Make sure the text matches exactly (case-sensitive)
//   const buttonEl = screen.getByText("Click me");

//   fireEvent.click(buttonEl); // Simulate click

//   // Check if console.log was called with the correct message
//   expect(console.log).toHaveBeenCalledWith("I got clicked once");
// });

//testing whether the clcik event is handled correctly or not

test("whether the click event is called correctly or not", () => {
  console.log = jest.fn(); // here we are mocking the console.log

  render(<Button />); // rendering the button el

  const buttonEl = screen.getByText("Click me");

  //fire event

  fireEvent.click(buttonEl);
  //
  expect(console.log).toHaveBeenCalledWith("I got clicked once");
});
