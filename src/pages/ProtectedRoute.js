import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import { Loading } from '../components';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <Wrapper className="section">
        <Loading />
      </Wrapper>
    );
  }

  if (!user) {
    return <Navigate to="auth" replace={true} />;
  }

  return children;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default ProtectedRoute;
