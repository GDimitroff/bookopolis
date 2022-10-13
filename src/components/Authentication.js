import styled from 'styled-components';
import { useState } from 'react';

import Logo from './Logo';
import { FcGoogle } from 'react-icons/fc';

const Authentication = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <Logo className="logo" showIcon={false} />
        <div className="form-control">
          <label htmlFor="email">Имейл</label>
          <input
            type="email"
            placeholder="ime@email.com"
            name="email"
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Парола</label>
          <input
            type={`${showPassword ? 'text' : 'password'}`}
            name="password"
            id="password"
            minLength="6"
            maxLength="25"
          />
          <button
            className="toggle-password"
            onClick={() =>
              setShowPassword((prevShowPassword) => !prevShowPassword)
            }>
            {showPassword ? 'Скрий' : 'Покажи'}
          </button>
        </div>
        <button className="btn btn-submit" type="submit">
          Вход / Регистрация
        </button>
        <hr />
        <button className="btn btn-google">
          <FcGoogle />
          <p>Влез с Google</p>
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 55vw;

  .form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
  }

  .logo {
    display: block;
    text-align: center;
    pointer-events: none;
    margin: 2rem 0;
  }

  .form-control {
    position: relative;
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.4rem;
      margin-bottom: 0.6rem;
    }

    input {
      font-family: inherit;
      padding: 0.8rem 1.6rem;
      border: 1px solid var(--color-grey-7);
      outline: 1px solid transparent;
      border-radius: var(--radius);
      background-color: var(--color-grey-9);
      transition: var(--transition);

      &:focus {
        outline: 1px solid var(--primary-brown);
      }
    }

    .toggle-password {
      position: absolute;
      top: 34px;
      right: 10px;
      font-size: 1.2rem;
    }
  }

  .btn-submit {
    color: var(--color-white);
    background-color: var(--primary-green);
    padding: 0.8rem 1.2rem;
    margin-top: 1rem;
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

  .btn-google {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 0.8rem 1.2rem;
    color: var(--color-grey-4);
    background-color: var(--color-grey-8);

    svg {
      font-size: 2rem;
    }
  }
`;

export default Authentication;
