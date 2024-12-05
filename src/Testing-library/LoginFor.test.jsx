import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import LoginFor from "./LoginFor";

test("calls onSubmit with username and password when submitted", () => {
  const handleSubmit = jest.fn();  // Mock the onSubmit handler
  render(<LoginFor onSubmit={handleSubmit} />);  // Render the LoginFor component with the mock handler

  // Find the input fields and submit button
  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByText("Submit");

  // Simulate user typing into the input fields
  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });

  // Simulate form submission
  fireEvent.click(submitButton);

  // Assert that onSubmit was called with the correct values
  expect(handleSubmit).toHaveBeenCalledWith({
    username: "testuser",
    password: "password123"
  });

  // Optionally, check that onSubmit was called once
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
