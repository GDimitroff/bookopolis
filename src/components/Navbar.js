import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import { useGlobalContext } from '../context/GlobalContext';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserMinus, FaQuoteRight, FaList } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';
import Logo from './Logo';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const { logout } = useAuthContext();

  return (
    <NavContainer>
      <div className="section">
        <div className="nav-header">
          <Logo></Logo>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <AiOutlineMenu />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="books" className="link books">
              <ImBook />
            </NavLink>
          </li>
          <li>
            <NavLink to="quotes" className="link quotes">
              <FaQuoteRight />
            </NavLink>
          </li>
          <li>
            <NavLink to="lists" className="link lists">
              <FaList />
            </NavLink>
          </li>
          <li>
            <NavLink to="auth" className="link" onClick={logout}>
              <FaUserMinus />
            </NavLink>
          </li>
        </ul>
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
    display: grid;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-toggle {
    display: flex;
    align-items: center;
    color: var(--color-brown-1);
    background: transparent;
    border: transparent;
    cursor: pointer;

    svg {
      font-size: 3rem;
    }
  }

  .logo svg,
  .nav-links {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .section {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
    }

    .nav-toggle {
      display: none;
    }

    .logo svg {
      display: block;
    }

    .nav-links {
      display: flex;
      gap: 12px;

      .link {
        font-size: 1.6rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: var(--color-brown-1);
        outline: var(--color-brown-2) 1px solid;
        background-color: var(--color-brown-2);
        display: grid;
        place-items: center;
        transition: var(--transition);

        &:hover,
        &:active {
          outline: var(--color-brown-1) 1px solid;
        }

        svg {
          transition: var(--transition);
        }
      }

      .link.books.active,
      .link.books:hover {
        outline: var(--color-red-1) 1px solid;

        svg {
          color: var(--color-red-1);
        }
      }

      .link.quotes.active,
      .link.quotes:hover {
        outline: var(--color-green-1) 1px solid;

        svg {
          color: var(--color-green-1);
        }
      }

      .link.lists.active,
      .link.lists:hover {
        outline: var(--color-yellow-1) 1px solid;

        svg {
          color: var(--color-yellow-1);
        }
      }
    }
  }
`;

export default Navbar;
