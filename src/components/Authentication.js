import styled from 'styled-components';
import { useState } from 'react';

import Logo from './Logo';
import { FcGoogle } from 'react-icons/fc';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <Logo showIcon={false} className="logo" />
        {!isLogin && (
          <div className="form-control">
            <label htmlFor="username">Потребителско име</label>
            <input
              type="text"
              placeholder="Иван"
              name="username"
              id="username"
            />
          </div>
        )}
        <div className="form-control">
          <label htmlFor="email">Имейл</label>
          <input
            type="email"
            placeholder="ivan@books.com"
            name="email"
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Парола</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">{isLogin ? 'Вход' : 'Регистрирай се'}</button>
        <hr />
        <button className="auth-with-google">
          <FcGoogle />
          <p>Влез с Google</p>
        </button>
      </form>
      <p className="switch-mode">Нямаш профил? Регистрирай се!</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    display: block;
    text-align: center;
    pointer-events: none;
    margin: 2rem 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
  }

  .form-control {
    display: flex;
    flex-direction: column;
  }

  .form-control label {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }

  .form-control input {
    font-family: inherit;
    padding: 0.8rem 1.6rem;
    border: 1px solid var(--color-grey-7);
    outline: 1px solid transparent;
    border-radius: var(--radius);
    background-color: var(--color-grey-9);
    transition: var(--transition);
  }

  .form-control input:focus {
    outline: 1px solid var(--primary-brown);
  }

  .switch-mode {
    padding: 2rem;
    margin-top: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
  }

  p {
    font-size: 1.4rem;
    text-align: center;
  }

  button {
    font-size: 1.4rem;
    font-family: inherit;
    font-weight: 700;
    border: none;
    color: var(--color-white);
    background-color: var(--primary-green);
    padding: 0.8rem 1.2rem;
    margin-top: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
    cursor: pointer;
  }

  hr {
    overflow: visible; /* For IE */
    padding: 0;
    margin: 2rem 0 0 0;
    border: none;
    border-top: 1px solid var(--color-grey-7);
    color: var(--color-grey-6);
    text-align: center;
  }

  hr:after {
    content: 'ИЛИ';
    display: inline-block;
    position: relative;
    top: -1rem;
    font-size: 1.4rem;
    padding: 0 0.8rem;
    background: var(--primary-background-color);
  }

  .auth-with-google {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: var(--color-grey-8);
    color: var(--primary-brown);
    margin-top: 0;

    svg {
      font-size: 2rem;
    }
  }

  .auth-with-google:hover {
    background-color: var(--color-grey-9);
  }
`;

export default Authentication;
