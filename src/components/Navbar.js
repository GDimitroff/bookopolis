import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';

import { useGlobalContext } from '../context/GlobalContext';
import Logo from './Logo';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <NavContainer>
      <div className="section">
        <button type="button" className="nav-toggle" onClick={openSidebar}>
          <AiOutlineMenu />
        </button>
        <Logo></Logo>
        <ul className="nav-links">
          <li>
            <NavLink to="/books" className="red">
              Книги
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes" className="yellow">
              Цитати
            </NavLink>
          </li>
          <li>
            <NavLink to="/lists" className="green">
              Списъци
            </NavLink>
          </li>
        </ul>
        <button type="button" className="user">
          <FaUserGraduate />
        </button>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color-1);
  box-shadow: var(--light-shadow);

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--color-brown-1);
    cursor: pointer;

    svg {
      font-size: 3rem;
    }
  }

  .logo svg,
  .nav-links {
    display: none;
  }

  .user {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    outline: var(--color-grey-8) 2px solid;
    background-color: var(--color-grey-9);
    border-radius: 50%;
    transition: var(--transition);
    cursor: pointer;

    svg {
      font-size: 2.4rem;
    }

    &:hover {
      outline: var(--color-grey-7) 2px solid;
    }
  }

  @media (min-width: 768px) {
    .section {
      display: grid;
      grid-template-columns: 1fr 2fr 60px;
      align-items: center;
    }

    .nav-toggle {
      display: none;
    }

    .logo svg {
      display: block;
    }

    .user {
      justify-self: end;
    }

    .nav-links {
      justify-self: end;
      height: 100%;
      display: flex;
      gap: 18px;

      a {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--color-brown-1);

        &::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 3px;
          display: block;
          transition: all 0.3s ease;
          bottom: 15%;
        }
      }

      .paper:hover::after,
      .paper.active::after {
        width: 100%;
        height: 3px;
        background-color: var(--color-brown-1);
      }

      .red:hover::after,
      .red.active::after {
        width: 100%;
        height: 3px;
        background-color: var(--color-red-1);
      }

      .green:hover::after,
      .green.active::after {
        width: 100%;
        height: 3px;
        background-color: var(--color-green-1);
      }

      .yellow:hover::after,
      .yellow.active::after {
        width: 100%;
        height: 3px;
        background-color: var(--color-yellow-1);
      }
    }
  }
`;

export default Navbar;
