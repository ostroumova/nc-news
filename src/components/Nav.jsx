import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="row">
  
      <Link to="/">All topics</Link> |
      <Link to="topics/?coding">Coding</Link> |
      <Link to="topics/?football">Football</Link> |
      <Link to="topics/?cooking">Cooking</Link> |
      
    </nav>
  );
};

export default Nav;
