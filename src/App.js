import { Routes, Route } from 'react-router-dom';
import { Home, Lists, Books, Book, Layout, Error, Profile } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<Book />} />
        <Route path="lists" element={<Lists />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
