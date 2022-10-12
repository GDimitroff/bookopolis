import { BrowserRouter as Router } from 'react-router-dom';

const Providers = ({ children }) => {
  return <Router>{children}</Router>;
};

export default Providers;
