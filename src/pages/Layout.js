import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../components';

const Layout = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
