import { Link, Outlet } from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <div className="logo">
      <h1>Bookstore</h1>
    </div>
    <nav className="navBar">
      <Link to="/">Book</Link>
      <Link to="categories">Category</Link>
    </nav>
    <div className="profile" />
    <Outlet />
  </header>
);

export default Navigation;
