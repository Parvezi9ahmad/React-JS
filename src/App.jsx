
import './App.css'
import Nav from './components/nav/Nav'
import Ref from './components/ref/Ref'
import Timer from './components/timer/Timer'
import RefDom from './components/ref/RefDom'
import UseReducer from './components/reducer/UseReducer'
import Image from './components/useeffect/lifecycle/Image'
import Text from './components/useeffect/lifecycle/Text'
import { useState } from 'react'
// import Users from './components/useeffect/lifecycle/Users'
import Counter from './components/reducer/Counter'
import Name from './redux/components/Name'
import Details from './redux/components/Details'
import City from './redux/components/City'
import Home from './components/home/Home'
import { Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import Electronics from "./components/products/categories/electronics/Electronics";
import Jewelery from "./components/products/categories/jewelery/Jewelery";
import AllProducts from "./components/allproducts/AllProducts";
import UserNames from "./components/user-names/UserNames";
import MenC from './components/products/categories/mensC/MenC'
import WomenC from './components/products/categories/womensC/WomenC'
import PageNotFound from "./components/pagenotfound/PageNotFound";
import ReduxHome from './redux/components/ReduxHome';
import ProductDetails from './components/product-details/ProductDetails';
import UserHome from './json-server/UserHome'



function App() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="app">


      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />} />
          <Route path={"jewelery"} element={<Jewelery />} />
          <Route path={"MenC"} element={<MenC />} />
          <Route path={"WomenC"} element={<WomenC />} />
        </Route>
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/allproducts"} element={<AllProducts />} />
        <Route path={"/usernames"} element={<UserNames />} />
        <Route path={"/redux"} element={<ReduxHome />}></Route>
        <Route path={"/jsonserver"} element={<UserHome />}></Route>
        <Route path={"/productdetails/:id/:price"} element={<ProductDetails />}></Route>
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
      {/* <div className='subAppContainer'>
        <Name />
        <City />
      </div>
      <hr />
      <Details /> */}

      {/* <Users />
      {showImage ? <Image /> : <Text />}
      <br /><br />
      <button onClick={() => { setShowImage(true) }}>Show Image</button>&nbsp;&nbsp;&nbsp;
      <button onClick={() => { setShowImage(false) }}>Show Text</button> */}

      {/* <RefDom /> */}
      {/* <UseReducer /> */}
      {/* <Counter /> */}
      {/* <Timer />
      <Ref /> */}

    </div>
  )
}

export default App
