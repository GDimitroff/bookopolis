import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context/GlobalContext';

const Logo = () => {
  const { closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <Link to="/" className="logo" onClick={closeSidebar}>
        <h1>Книгополис</h1>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    font-family: 'Lobster', cursive;
    color: var(--color-red-1);
    letter-spacing: 3px;
    transition: var(--transition);

    h1 {
      font-size: 3.8rem;
    }
  }
`;

export default Logo;
