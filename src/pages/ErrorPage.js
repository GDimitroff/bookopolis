import styled from 'styled-components';

import image from '../assets/undraw_location_search.svg';

const ErrorPage = () => {
  return (
    <Wrapper className="section">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h1>404</h1>
      <p>Възникна грешка. Ресурсът, който търсите не е намерен.</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - var(--navbar-height));
  display: grid;
  align-content: center;
  place-items: center;

  .image {
    max-width: 500px;
  }

  img {
    display: block;
    width: 100%;
  }

  h1 {
    font-size: 9.6rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export default ErrorPage;
