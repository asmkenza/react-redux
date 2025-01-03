import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from "./redux/UserReducer";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    users: UserReducer
  }
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


