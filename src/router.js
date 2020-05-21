import React from 'react';
import MainPage from './pages/Main';
import About from './pages/About';

const routes = [
    {
        path: `/`,
        exact: true,
        title: ``,
        component: MainPage
    },
    {
        path: `/About`,
        exact: true,
        title: ``,
        component: About
    },
    {
        component: () => <div>
            <h2>404</h2>
        </div>
    }
];

export default routes;
