import Home from "./Pages/home/Home";
import UserList from "./Pages/Users/UserList";
import NewUsers from "./Pages/NewUser/NewUsers";
import Products from "./Pages/Products/ProductsPage";
import Product from'./Pages/Product/ProductSingle';
import SignUp from "./components/SingComponent/SignUp"


let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUsers", element: <NewUsers /> },
  { path: "/Products", element: <Products /> },
  {path: '/product/:productID', element: <Product />},
  { path: "/signup", element: <SignUp /> },
];

export default routes;
