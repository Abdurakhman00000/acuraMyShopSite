import React from 'react';
import HomePage from '../pages/HomePage'
import AddProduct from '../components/products/AddProduct';
import ListProduct from '../components/products/ListProduct';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../components/products/SignUp';
import SignIn from '../components/products/SignIn';
import EditProduct from '../components/products/EditProduct';

const MainRouters = () => {

    const ROUTER = [
        {
            link: '/',
            element: <HomePage />,
            id: 1,
        },

        {
            link: '/addProduct',
            element: <AddProduct />,
            id: 2,
        },

        {
            link: '/listProduct',
            element: <ListProduct />,
            id: 3,
        },

        {
            link: '/signUp',
            element: <SignUp />,
            id: 4,
        },

        {
            link: '/signIn',
            element: <SignIn />,
            id: 5,
        },

        {
            link: '/editProduct/:id',
            element: <EditProduct />,
            id: 6,
        }
    ];

    return (
        <Routes>
            {
                ROUTER.map((el) => (
                    <Route path={el.link} element={el.element} key={el.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRouters;