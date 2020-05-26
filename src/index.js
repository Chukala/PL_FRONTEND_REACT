import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { ProductProvider}  from './context/context';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<ProductProvider>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider> , 
  document.getElementById('root'));


