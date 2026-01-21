import { render, screen } from "@testing-library/react"
import RestaurentCard from "../RestaurantCard"
import resCardMock from '../mocks/resCardMock.json'
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should render restaurent card component with props data ",()=>{
    render(
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <RestaurentCard resData = {resCardMock} />
        </BrowserRouter>
    )

    const resCard = screen.getByText("RNR Biryani - Taste of 1953");

    expect(resCard).toBeInTheDocument()
})  