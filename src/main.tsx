import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header/Header.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </Provider>
);
