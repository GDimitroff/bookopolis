import { Routes, Route } from 'react-router-dom';
import {
  Authentication,
  Dashboard,
  Lists,
  Books,
  Book,
  Layout,
  Error,
  ProtectedRoute,
} from './pages';

const App = () => {
  return (
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
        <Route path="books/:id" element={<Book />} />
        <Route path="lists" element={<Lists />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
