import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import { APIDisplay } from './APIDisplay';
import APIDisplayWithClass from './APIDisplayWithClass';
import FormFunction from './FormFunction';
import { Ecommerce } from './Ecommerce';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProps from './MyProps';
import FormInClass from './FormInClass';
import SingUpFormWithValidation from './SingUpFormWithValidation';
import CrudOperation from './CrudOperation';
import CustomerData from './CustomerData';
import { FormWithBoostrap } from './FormWithBoostrap';
import MyFormUser from './MyFormUser';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormWithBoostrapr/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
