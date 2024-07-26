// App.js
import React from "react";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Dashboard from "./Dashboard"; // Import the Dashboard component
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />, // Add the Dashboard route
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
