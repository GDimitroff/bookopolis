import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import {
  Authentication,
  Dashboard,
  Books,
  Layout,
  Error,
  ProtectedRoute,
} from './pages';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="auth" element={<Authentication />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
          <Route path="/" element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
