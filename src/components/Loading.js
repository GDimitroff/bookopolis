import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className="yellow"></div>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="violet"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 3vw;
    height: 3vw;
    border-radius: 100%;
    margin: 2vw;
    background-image: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    animation: bounce 1.5s 0.5s linear infinite;
  }

  .yellow {
    background-color: var(--brown-1);
  }

  .red {
    background-color: var(--red-1);
    animation-delay: 0.1s;
  }

  .blue {
    background-color: var(--green-1);
    animation-delay: 0.2s;
  }

  .violet {
    background-color: var(--blue-1);
    animation-delay: 0.3s;
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: scale(1);
      filter: blur(0px);
    }
    25% {
      transform: scale(0.6);
      filter: blur(3px);
    }
    75% {
      filter: blur(3px);
      transform: scale(1.4);
    }
  }
`;

export default Loading;
