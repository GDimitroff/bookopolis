import styled from 'styled-components';
import { Authentication } from '../components';
import image from '../assets/undraw_education.svg';

const LandingPage = () => {
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

export default LandingPage;
