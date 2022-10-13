import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiBookstack } from 'react-icons/si';

const Logo = ({ showIcon = true }) => {
  return (
    <Wrapper>
      <Link to="/" className="logo">
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
    color: var(--primary-brown);
    letter-spacing: 3px;
    transition: var(--transition);

    svg {
      font-size: 3rem;
    }
  }
`;

export default Logo;
