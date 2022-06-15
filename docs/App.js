import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Homepage from './components/homepage';
import Navbar from './components/navbar';

// - Users
import HomeUser from './components/users/home';
import CreateUser from './components/users/create';
import EditUser from './components/users/edit';
import DeleteUser from './components/users/delete';
// - Project
import CreateProject from './components/projects/create'
//
import Cursor from './components/cursor';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/projects', element: <HomeUser /> },
    { path: '/projects/add', element: <CreateProject /> },
    { path: '/user', element: <HomeUser /> },
    { path: '/user/add', element: <CreateUser /> },
    { path: '/user/edit/:id', element: <EditUser /> },
    { path: '/user/delete/:id', element: <DeleteUser /> },
  ]);
  return routes
}

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <Cursor/>
      <App />
    </Router>
  );
};

export default AppWrapper;
