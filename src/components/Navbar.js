import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { SiBookstack } from 'react-icons/si';
import { Fragment } from 'react';

const Navbar = () => {
  const user = true;

  const openSidebar = () => {
    console.log('open sidebar');
  };

  return (
    <NavContainer>
      <div className="section">
        <div className="nav-header">
          <Link to="/" className="logo">
            <SiBookstack />
            <h1>Книгополис</h1>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <AiOutlineMenu />
          </button>
        </div>
        <ul className="nav-links">
          {user && (
            <Fragment>
              <li>
                <Link to="/" className="paper">
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/books" className="red">
                  Книги
                </Link>
              </li>
              <li>
                <Link to="/lists" className="green">
                  Списъци
                </Link>
              </li>
              <li>
                <Link to="/profile" className="paper">
                  Профил
                </Link>
              </li>
            </Fragment>
          )}
          {!user && (
            <li>
              <Link to="/login" className="paper">
                Вход
              </Link>
            </li>
          )}
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
  background-color: var(--secondary-background-color);
  box-shadow: var(--light-shadow);

  .section {
    display: grid;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-family: 'Lobster', cursive;
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--primary-brown);
      letter-spacing: 3px;
      transition: var(--transition);

      svg {
        font-size: 3rem;
      }
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-brown);
    cursor: pointer;

    svg {
      font-size: 2.6rem;
    }
  }

  .nav-links {
    display: none;
  }

  .nav-buttons-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .section {
      grid-template-columns: auto 1fr;
      align-items: center;
    }

    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: end;
      gap: 16px;

      a {
        font-size: 1.6rem;
        letter-spacing: 1px;
        padding: 0.6rem 0;
        color: var(--primary-brown);
        border-bottom: 3px solid transparent;
        transition: var(--transition);
      }

      .paper {
        &:hover {
          border-bottom: 3px solid var(--primary-brown);
        }
      }

      .red {
        &:hover {
          border-bottom: 3px solid var(--primary-red);
        }
      }

      .green {
        &:hover {
          border-bottom: 3px solid var(--primary-green);
        }
      }
    }

    .nav-buttons-wrapper {
      display: flex;
    }
  }
`;

export default Navbar;
