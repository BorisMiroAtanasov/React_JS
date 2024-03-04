import '../node_modules/react/umd/react.production.min.js'
import '../node_modules/react-dom/umd/react-dom.production.min.js'

//import React from 'react';

const rootDomElement = document.getElementById('root');

 const root = ReactDOM.createRoot(rootDomElement);

// non JSX components

function Footer(){
    const reactElement = React.createElement('div',
     {className:'site-footer'},
     React.createElement('p', {},'All rights reserved')
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