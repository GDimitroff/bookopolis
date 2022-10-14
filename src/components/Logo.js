import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiBookstack } from 'react-icons/si';

const Logo = ({ showIcon = true }) => {
  return (
    <Wrapper>
      <Link to="/books" className="logo">
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
    color: var(--color-brown-1);
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
