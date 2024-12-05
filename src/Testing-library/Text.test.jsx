import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Text from "./Text";

test("test whether the text 'Hello World' is in the document or not", () => {
    render(<Text />);
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
});
