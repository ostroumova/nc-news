import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="row">
  
      <Link to="/">All topics</Link> |
      <Link to="topics/?mitch">Mitch</Link> |
      <Link to="topics/?cats">Cats</Link> |
      <Link to="topics/?paper">Paper</Link> |
      <Link to="Login">LogIn</Link> |
  
    </nav>
  );
};

export default Nav;
