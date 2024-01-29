import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import PlayerProfileContextProvider from "./context/PlayerProfileContextProvider.jsx";
import FavListContextProvider from "./context/FavListContextProvider.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import LoaderContextProvider from "./context/LoaderContextProvider.jsx";
import FetchErrorContextProvider from "./context/FetchErrorContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlayerProfileContextProvider>
    <FavListContextProvider>
      <UserContextProvider>
        <LoaderContextProvider>
          <FetchErrorContextProvider>
            <App />
          </FetchErrorContextProvider>
        </LoaderContextProvider>
      </UserContextProvider>
    </FavListContextProvider>
  </PlayerProfileContextProvider>
);
