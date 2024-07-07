import React from "react";
import {screen, render} from "@testing-library/react"
import Header from "./Header";
import ReactDOM from "react-dom"
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";



describe("Header test", () => {
    //var. 1 - тестване със създаване на виртуално дърво - "на ръка"

    // test('Has heading', () =>{
    //     const rootElement = document.createElement('div');
    //     rootElement.id = 'root';

    //     document.body.appendChild(rootElement);

    //     const root = ReactDOM.createRoot(rootElement);
    //     root.render(React.createElement(Header))

    //     const actualElement = rootElement.querySelector('h1.heading');
    //     expect(actualElement.textContent).toBe('Unit Testing')



    // })
    test('Has heading', () =>{
        render(<Header/>)

        const element  = screen.getByText('Unit Testing')

        expect(element).toBeInTheDocument()

     



    })


})