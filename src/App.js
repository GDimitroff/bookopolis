import { Routes, Route } from 'react-router-dom';
import { Home, Lists, Books, Book, Layout, Error, About } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<Book />} />
        <Route path="lists" element={<Lists />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
