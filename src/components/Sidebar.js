import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context/GlobalContext';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <Logo className="logo" showIcon={false} />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="links">
          <li className="red">
            <Link to="books" onClick={closeSidebar}>
              Книги
            </Link>
          </li>
          <li className="green">
            <Link to="quotes" onClick={closeSidebar}>
              Цитати
            </Link>
          </li>
          <li className="yellow">
            <Link to="lists" onClick={closeSidebar}>
              Списъци
            </Link>
          </li>
        </ul>
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
    margin-bottom: 5rem;

    .logo {
      pointer-events: none;
    }
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
    font-weight: 700;
    letter-spacing: var(--spacing);
    transition: var(--transition);
  }

  .red a {
    color: var(--color-red-1);

    &:hover {
      color: var(--color-brown-2);
      background-color: var(--color-red-1);
    }
  }

  .green a {
    color: var(--color-green-1);

    &:hover {
      color: var(--color-brown-2);
      background-color: var(--color-green-1);
    }
  }

  .yellow a {
    color: var(--color-yellow-1);

    &:hover {
      color: var(--color-brown-2);
      background-color: var(--color-yellow-1);
    }
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
