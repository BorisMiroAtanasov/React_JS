import '../node_modules/react/umd/react.production.min.js'
import '../node_modules/react-dom/umd/react-dom.production.min.js'

//import React from 'react';

const rootDomElement = document.getElementById('root');

 const root = ReactDOM.createRoot(rootDomElement);

// const reactHeadingElement = React.createElement('h1',{}, 'Hello from JSX!');

// const reactSecondElement = React.createElement('h2', {}, 'The best syntax ever!');

// const header = React.createElement('header',{className:'site-header'}, reactHeadingElement, reactSecondElement);

const headarJSX = (
    <header className='site-heaader'> 
    <h1>Hello from JSX!</h1>
    <h2>The best syntax ever!</h2>

    <p>someting else here</p>

    </header>
);


root.render(headarJSX)