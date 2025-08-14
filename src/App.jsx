
import './App.css'
import Header from './components/header/Header'
import Counter from './components/counter/Counter'
import ImageComp from './components/imagetask/ImageComp'
import Products from './components/products/Products'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Electronics from './components/products/categories/electronics/Electronics'
import Jewelery from './components/products/categories/jewelery/Jewelery'
import MenC from './components/products/categories/mensC/MenC'
import WomenC from './components/products/categories/womensC/WomenC'
import PageNotFound from './components/pagenotfound/PageNotFound'
import AllProducts from './components/allproducts/AllProducts'
import UserNames from './components/user-names/UserNames'




function App() {
  return (
    <div className="app">
      {/* <h2>App Component</h2>
      <Header/> */}
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} >
          <Route path={"electronics"} element={<Electronics />} />
          <Route path={"jewelery"} element={<Jewelery />} />
          <Route path={"menc"} element={<MenC />} />
          <Route path={"womenc"} element={<WomenC />} />
        </Route>
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/imagecomp"} element={<ImageComp />} />
        <Route path={"/allproducts"} element={<AllProducts />} />
        <Route path={"/usernames"} element={<UserNames />} />
        <Route path={"*"} element={<PageNotFound />}/>

      </Routes>
      {/* <Home />
      <Products />

      <ImageComp />
      <Counter /> */}
    </div>
  )
}

export default App
