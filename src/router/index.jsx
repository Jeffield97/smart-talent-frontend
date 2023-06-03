import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home/Home";
import Hotel from "../views/Hotel/Hotel";
import Room from "../views/Room/Room";


export const router = createBrowserRouter([
  {
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/hotels", element: <Hotel></Hotel> },
      { path: "/rooms/hotel/:id", element: <Room></Room> },
      /*{
        element: <ProtectedRoute></ProtectedRoute>,
        children: [
          { path: "pokedex", element: <Pokedex></Pokedex>, loader: pokedexLoader},
          {
            path: "pokemon-detail/:id",
            element: <PokemonDetail></PokemonDetail>,
          },
        ],
      },*/
    ],
  },
  { path: "*", element: <h1>Not found 404</h1> },
]);