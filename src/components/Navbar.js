import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from './Logo';

const Navbar = () => {
  const openSidebar = () => {
    console.log('open sidebar');
  };

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
            <NavLink to="/books" className="red">
              Книги
            </NavLink>
          </li>
          <li>
            <NavLink to="/lists" className="green">
              Списъци
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="paper">
              Профил
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
  background-color: var(--primary-background-color);
  box-shadow: var(--light-shadow);

  .section {
    display: grid;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--brown-1);
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
        color: var(--brown-1);
        border-bottom: 3px solid transparent;
        transition: var(--transition);
      }

      .paper:hover,
      .paper.active {
        border-bottom: 3px solid var(--primary-brown);
      }

      .red:hover,
      .red.active {
        border-bottom: 3px solid var(--primary-red);
      }

      .green:hover,
      .green.active {
        border-bottom: 3px solid var(--primary-green);
      }
    }

    .nav-buttons-wrapper {
      display: flex;
    }
  }
`;

export default Navbar;
