import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import PageNotFound from '../components/pagenotfound/PageNotFound';
import { Component } from 'react';

function Routing() {
    var routes = [{ path: "/", component: <Home /> },
    { path: "/signin", component: <Login /> },
    { path: "/signup", component: <Signup /> },
    { path: "*", component: <PageNotFound /> }
    ];
    return (
        <Routes>
            {
                routes.map((ele) => {
                    return <Route path={ele.path} element={ele.component} />
                })
            }
        </Routes>
    )
}

export default Routing