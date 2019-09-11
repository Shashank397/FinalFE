import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import'react-dropdown';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    (
      <CookiesProvider>
    <BrowserRouter>
          <App />
    </BrowserRouter>
    </CookiesProvider>
    )
     , document.getElementById("root")
)