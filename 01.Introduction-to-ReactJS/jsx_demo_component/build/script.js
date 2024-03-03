import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

//import React from 'react';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// const reactHeadingElement = React.createElement('h1',{}, 'Hello from JSX!');

// const reactSecondElement = React.createElement('h2', {}, 'The best syntax ever!');

// const header = React.createElement('header',{className:'site-header'}, reactHeadingElement, reactSecondElement);

// const Footer = () => {
//     return React.createElement('div',
//         { className: 'site-footer' },
//         React.createElement('p',
//             {},
//             'All rights reservd &#copy;'
//         )
//     )
// }
var Footer = function Footer() {
    return React.createElement(
        'div',
        { className: 'site-footer' },
        React.createElement(
            'p',
            null,
            'All rights reservd \xA9'
        )
    );
};
var body = React.createElement(
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

root.render(body);