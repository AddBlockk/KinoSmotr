import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Header} from "./components/header/Header.tsx";
import {Footer} from "./components/footer/Footer.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
    // Создаем корневой элемент React
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Header/>
            <App />
            <Footer/>
        </React.StrictMode>
    );
} else {
    // Обрабатываем случай, когда элемент с ID "root" не найден
    console.error("Root element not found");
}