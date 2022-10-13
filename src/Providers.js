import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './context/AuthContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <Router>{children}</Router>
    </AuthProvider>
  );
};

export default Providers;
