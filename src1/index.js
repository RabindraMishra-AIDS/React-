import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Fun from './fun';      //Function name and then folder name.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fun />                                      //concept of component 
  </React.StrictMode>
);


