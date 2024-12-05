import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/react';
import Button2 from "./Button2";

test("test whether the document title is changing on the click",()=>{
  const originlTitle = document.title;
    render(<Button2/>)
    const btnEl = screen.getByText('submit')
    fireEvent.click(btnEl)
    expect(document.title).toBe("Adithya")
    document.title = originlTitle;

})