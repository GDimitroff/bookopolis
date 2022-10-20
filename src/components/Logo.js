import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context/GlobalContext';
import { SiBookstack } from 'react-icons/si';

const Logo = ({ showIcon = true }) => {
  const { closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <Link to="/" className="logo" onClick={closeSidebar}>
        {showIcon && <SiBookstack />}
        <h1>Книгополис</h1>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    font-family: 'Lobster', cursive;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-red-1);
    letter-spacing: 3px;
    transition: var(--transition);

    h1 {
      font-size: 3.8rem;
    }

    svg {
      font-size: 3.6rem;
    }
  }
`;

export default Logo;
