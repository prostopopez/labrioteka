import React from 'react';
import MainPage from './pages/Main';
import CatalogPage from './pages/Catalog';
import BookName from './pages/Catalog/BookName';
import Reviews from './pages/Catalog/BookName/Reviews'
import Authors from './pages/Catalog/Authors';
import AuthorName from './pages/Catalog/Authors/AuthorName';
import Genres from './pages/Catalog/Genres';
import GenreName from "./pages/Catalog/Genres/GenreName";
import Collections from './pages/Catalog/Collections';
import CollectionName from "./pages/Catalog/Collections/CollectionName";
import DeliveryPage from './pages/Delivery';
import ContactPage from './pages/Contacts';

const routes = [
    {
        path: `/`,
        exact: true,
        title: ``,
        component: MainPage
    },
    {
        path: `/catalog`,
        exact: true,
        title: ``,
        component: CatalogPage
    },
    {
        path: `/delivery`,
        exact: true,
        title: ``,
        component: DeliveryPage
    },
    {
        path: `/contacts`,
        exact: true,
        title: ``,
        component: ContactPage
    },
    {
        path: `/catalog/:id`,
        exact: true,
        title: ``,
        component: BookName
    },
    {
        path: `/catalog/:id/reviews`,
        exact: true,
        title: ``,
        component: Reviews
    },
    {
        path: `/catalog/authors`,
        exact: true,
        title: ``,
        component: Authors
    },
    {
        path: `/catalog/authors/:id`,
        exact: true,
        title: ``,
        component: AuthorName
    },
    {
        path: `/catalog/genres`,
        exact: true,
        title: ``,
        component: Genres
    },
    {
        path: `/catalog/genres/:id`,
        exact: true,
        title: ``,
        component: GenreName
    },
    {
        path: `/catalog/collections`,
        exact: true,
        title: ``,
        component: Collections
    },
    {
        path: `/catalog/collections/:id`,
        exact: true,
        title: ``,
        component: CollectionName
    },
    {
        component: () => <div>
            <h2>404</h2>
        </div>
    }
];

export default routes;
