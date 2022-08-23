import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="row">
  
      <Link to="">All topics</Link> |
      <Link to="">Coding</Link> |
      <Link to="">Football</Link> |
      <Link to="">Cooking</Link> |
      
    </nav>
  );
};

export default Nav;
