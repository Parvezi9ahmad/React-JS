import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import PageNotFound from '../components/pagenotfound/PageNotFound';
import Products from '../pages/products/Products';
import ProductDetails from '../components/product/ProductDetails';
import About from '../pages/about/About';
import Profile from '../pages/profile/Profile';
import Cart from '../pages/cart/Cart';
import Implementation from '../components/implementation/Implementation';

export var routes = [{ path: "/", component: <Home /> },

{ path: "/products", component: <Products /> },
{ path: "/mens", component: <Implementation /> },
{ path: "/womens", component: <Implementation /> },
{ path: "/kids", component: <Implementation /> },
{ path: "/checkout", component: <Implementation /> },
{ path: "/aboutus", component: <About /> },
{ path: "/profile", component: <Profile /> },
{ path: "/carts", component: <Cart /> },
{ path: "/productdetails/:id", component: <ProductDetails /> },
// { path: "*", component: <PageNotFound /> }

];