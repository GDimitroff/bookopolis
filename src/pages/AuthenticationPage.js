import styled from 'styled-components';

import { useAuthContext } from '../context/AuthContext';
import { Authentication, Loading } from '../components';
import image from '../assets/undraw_bibliophile.svg';
import { Navigate } from 'react-router-dom';

const AuthenticationPage = () => {
  const { loading, user } = useAuthContext();

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Wrapper className="section">
      <img src={image} alt="Girl and books" />
      <Authentication />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: none;
  }

  @media (min-width: 768px) {
    img {
      display: block;
      width: 340px;
      margin-right: 5rem;
    }
  }
`;

export default AuthenticationPage;
