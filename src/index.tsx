import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import PrivateRoute from "./helpers/Privateroute";
import Homepage from "./pages/Homepage";
import Privatepage from "./pages/Privatepage";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

      <ReactKeycloakProvider authClient={keycloak}>

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Homepage />} />

                      <Route path="/private"  element={
                          <PrivateRoute>
                              <Privatepage />
                              </PrivateRoute>

                              } />
              </Routes>
          </BrowserRouter>


      <Outlet />
      </ReactKeycloakProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
