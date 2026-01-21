import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
it("Should render header component with login button",()=>{
    render(
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        
        <Provider store={appStore}>

            <Header/>
        </Provider>

        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument();

})
it("Should render header component with cart items 0 ",()=>{
    render(
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        
        <Provider store={appStore}>

            <Header/>
        </Provider>

        </BrowserRouter>
    )

    const cartItems = screen.getByText("🛒 Cart")
    expect(cartItems).toBeInTheDocument();

})

it("Should render header component with cart items ",()=>{
    render(
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        
        <Provider store={appStore}>

            <Header/>
        </Provider>

        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument();

})

it("Should chnage login button to logoout on click  ",()=>{
    render(
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        
        <Provider store={appStore}>

            <Header/>
        </Provider>

        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:"login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"logout"});

    expect(logoutButton).toBeInTheDocument();

})  