import '../node_modules/react/umd/react.production.min.js'
import '../node_modules/react-dom/umd/react-dom.production.min.js'

//import React from 'react';

const rootDomElement = document.getElementById('root');

 const root = ReactDOM.createRoot(rootDomElement);

// non JSX components
const FooterText = React.createElement('p', {},'All rights reserved R')

function Footer(){
    const reactElement = React.createElement('div',
     {className:'site-footer'},
     FooterText
     //React.createElement(FooterText) друг начин да подадем елемента
     )
     //console.log(reactElement);
     return reactElement
}
const headarJSX = (
    <div>
    <header className='site-heaader'> 
    <h1>Hello from JSX!</h1>
    <h2>The best syntax ever!</h2>

    <p>someting else here</p>

    </header>
    <Footer />
    </div>
);


root.render(headarJSX)