import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

import Logo from './Logo';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { formatError } from '../utils/constants';

const Authentication = () => {
  const { login, createUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailRef.current.value.trim() === '') {
      return setError(formatError('invalid email'));
    }
    if (passwordRef.current.value.trim().length < 6) {
      return setError(formatError('invalid password'));
    }

    setLoading(true);
    setError(null);

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      navigate('/books');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        try {
          await createUser(emailRef.current.value, passwordRef.current.value);
          setLoading(false);
          navigate('/books');
        } catch (error) {
          setLoading(false);
          setError(formatError(error.code));
          console.log(error);
        }
      } else {
        setLoading(false);
        setError(formatError(error.code));
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      setError(null);
    }
  }, [error]);

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
            ref={emailRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Парола</label>
          <input
            type={`${showPassword ? 'text' : 'password'}`}
            name="password"
            id="password"
            placeholder="*********"
            minLength="6"
            maxLength="25"
            ref={passwordRef}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() =>
              setShowPassword((prevShowPassword) => !prevShowPassword)
            }>
            {showPassword ? 'Скрий' : 'Покажи'}
          </button>
        </div>
        <button type="submit" className="btn btn-submit">
          Вход / Регистрация
          {loading && <AiOutlineLoading3Quarters className="spinner-small" />}
        </button>
        <hr />
        <button type="button" className="btn btn-google">
          <FcGoogle />
          <p>Влез с Google</p>
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;

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
      border: 1px solid var(--grey-7);
      outline: 1px solid transparent;
      border-radius: var(--radius);
      background-color: var(--grey-9);
      transition: var(--transition);

      &:focus {
        outline: 1px solid var(--brown-1);
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
    position: relative;
    color: var(--white);
    background-color: var(--green-1);
    padding: 0.8rem 1.2rem;
    margin-top: 1rem;

    svg {
      position: absolute;
      top: 10px;
      right: 50px;
    }
  }

  hr {
    overflow: visible; /* For IE */
    padding: 0;
    margin: 2rem 0 0 0;
    border: none;
    border-top: 1px solid var(--grey-7);
    color: var(--grey-6);
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
    margin-bottom: 2rem;
    color: var(--grey-4);
    background-color: var(--grey-8);

    svg {
      font-size: 2rem;
    }
  }
`;

export default Authentication;
