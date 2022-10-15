import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import GlobalProvider from './context/GlobalContext';
import BooksProvider from './context/BooksContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <BooksProvider>
          <Router>{children}</Router>
        </BooksProvider>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default Providers;
