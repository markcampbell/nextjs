import ActiveLink from './ActiveLink';

export const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-link">Home</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/about">
            <a className="nav-link">About</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink activeClassName="active" href="/jams">
            <a className="nav-link">Jams</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
