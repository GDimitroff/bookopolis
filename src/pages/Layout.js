import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar, Sidebar } from '../components';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
