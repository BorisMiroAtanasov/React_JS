import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

//import React from 'react';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// non JSX components
var FooterText = React.createElement('p', {}, 'All rights reserved R');

function Footer() {
    var reactElement = React.createElement('div', { className: 'site-footer' }, FooterText
    //React.createElement(FooterText) друг начин да подадем елемента
    );
    //console.log(reactElement);
    return reactElement;
}
var headarJSX = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        { className: 'site-heaader' },
        React.createElement(
            'h1',
            null,
            'Hello from JSX!'
        ),
        React.createElement(
            'h2',
            null,
            'The best syntax ever!'
        ),
        React.createElement(
            'p',
            null,
            'someting else here'
        )
    ),
    React.createElement(Footer, null)
);

root.render(headarJSX);