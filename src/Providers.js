import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import GlobalProvider from './context/GlobalContext';
import BooksProvider from './context/BooksContext';
import FiltersProvider from './context/FiltersContext';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <BooksProvider>
          <FiltersProvider>
            <Router>{children}</Router>
          </FiltersProvider>
        </BooksProvider>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default Providers;
