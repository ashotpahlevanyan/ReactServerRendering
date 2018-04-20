import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import AdminListPage from './pages/AdminsListPage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...UsersListPage,
				path: '/users'
			},
			{
				...AdminListPage,
				path: '/admins'
			},
			{
				...NotFoundPage
			}
		]
	}
];
