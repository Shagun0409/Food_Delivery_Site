import {render, screen} from '@testing-library/react';
import Contact from "../Contact.js";      
import React from "react";  
import '@testing-library/jest-dom'; 

test("Should load Contact component", async () => {
  render(<Contact />);
  
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
}); 