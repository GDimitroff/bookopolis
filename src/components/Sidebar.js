import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import { useGlobalContext } from '../context/GlobalContext';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';

const Sidebar = () => {
  const { logout } = useAuthContext();
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const handleLogout = () => {
    logout();
    closeSidebar();
  };

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <Logo className="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="links">
          <li className="paper">
            <Link to="/" onClick={closeSidebar}>
              Начало
            </Link>
          </li>
          <li className="red">
            <Link to="books" onClick={closeSidebar}>
              Книги
            </Link>
          </li>
        </ul>
        <hr />
        <button type="button" className="btn-logout" onClick={handleLogout}>
          Изход
        </button>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background-color-1);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    margin-top: 20vh;
    margin-bottom: 3rem;
  }

  .close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    color: var(--color-brown-1);
    transition: var(--transition);
    cursor: pointer;
  }

  .logo-container {
    width: 80vw;
    margin: 0 auto;
  }

  .logo {
    width: 100%;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .links a {
    display: block;
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 1.5rem;
    color: var(--color-brown-1);
    letter-spacing: var(--spacing);
    transition: var(--transition);

    &:hover {
      color: var(--background-color-1);
      background-color: var(--color-red-1);
    }
  }

  hr {
    width: 90vw;
    border-color: var(--color-brown-2);
    margin: 2rem 0 3rem 0;
  }

  .btn-logout {
    color: var(--color-brown-1);
  }

  @media screen and (min-width: 600px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
