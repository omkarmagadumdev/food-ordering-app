import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us test cases",()=>{
    it("Should load contact us component",()=>{
    
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument()
    
    })
    
    it("Should load contact us button component",()=>{
    
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument()
    
    })
    it("Should load contact us name component",()=>{
    
        render(<Contact/>);
    
        const name  = screen.getByText("Name");
        //Assertion
        expect(name).toBeInTheDocument()
    
    })
    
    it("Should load contact us name component",()=>{
    
        render(<Contact/>);
    
        const input  = screen.getByPlaceholderText("Enter your name");
        //Assertion
        expect(input).toBeInTheDocument()
    
    })
    
    it("Should load 2 input boxes on the contact component",()=>{
    
        render(<Contact/>);
    
        const inputboxes  = screen.getAllByRole("textbox");
    
        console.log(inputboxes.length)
        //Assertion
        expect(inputboxes.length).toBe(3)
    
    })
})

