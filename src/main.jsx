import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Authlayout, Login } from "./Components/index.js";
import AddPost from "./pages/AddPost.jsx";
import Signup from './pages/Signup.jsx'
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Posts.jsx";
import AllPosts from "./pages/AllPost.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <Authlayout authentication={false}>
                    <Login />
                </Authlayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <Authlayout authentication={false}>
                    <Signup />
                </Authlayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Authlayout authentication>
                    {" "}
                    <AllPosts />
                </Authlayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Authlayout authentication>
                    {" "}
                    <AddPost />
                </Authlayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Authlayout authentication>
                    {" "}
                    <EditPost />
                </Authlayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
