import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const routes = [
  {
    path: '/',
    element: <div>Hello world</div>
  }
]

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ path, element }) => <Route path = {path} element = {element}  />)
        }
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

