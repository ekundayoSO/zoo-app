import "./App.css";
import { animals, birds, fishes, insects } from "./animalsList.js";
import { useState } from "react";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "./routes/CategoryPage.jsx";
import SinglePage from "./routes/SinglePage.jsx";
import './App.css'

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

   const removeHandler = (name, category) => {
     setZoo((prevZoo) => ({
       ...prevZoo,
       [category]: prevZoo[category].filter((el) => el.name !== name),
       
     }));
   };

   const likesHandler = (name, category, action) => {
    setZoo(prevZoo => ({
      ...prevZoo, 
      [category] : prevZoo[category].map(el => el.name === name ? {...el, likes: el.likes + (action === 'add' ? 1 : -1)} : el),
    }))
   };

  const router = createBrowserRouter([
    { path: "/home", element: <Home /> },
    {
      path: "/", element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: ":category",
          element: (
            <CategoryPage
              addLikes={likesHandler}
              removeLikes={likesHandler}
              removeCard={removeHandler}
              {...zoo}
            />
          ),
        },
        {path:':category/:name', element: <SinglePage {...zoo}/>},
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
