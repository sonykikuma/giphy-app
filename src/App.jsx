//import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import GifProvider from "./context/gif-context";

import Home from "./pages/home";
import Category from "./pages/category";
import Search from "./pages/search";
import SingleGifs from "./pages/single-gif";
import Favorites from "./pages/favorites";

//homepage
//categories
//search
//single gif
//favorites

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/:category", element: <Category /> },
      { path: "/search/:query", element: <Search /> },
      { path: "/:type/:slug", element: <SingleGifs /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
