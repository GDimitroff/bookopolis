import styled from 'styled-components';
import { Authentication } from '../components';
import image from '../assets/undraw_education.svg';

const LandingPage = () => {
  return (
    <Wrapper className="section">
      <div className="image">
        <img src={image} alt="Girl and books" />
      </div>
      <div className="authentication">
        <Authentication />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;

  img {
    display: none;
    width: 240px;
  }

  .authentication {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;

export default LandingPage;
