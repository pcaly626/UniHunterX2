import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const mainElement = document.createElement('div');
mainElement.className="App";
document.body.appendChild(mainElement);

ReactDom.render(<App />, mainElement);
