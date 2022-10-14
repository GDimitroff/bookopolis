import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import GlobalProvider from './context/GlobalContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>{children}</Router>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default Providers;
