import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchTopics } from "../api";

const Nav = ({ topics, setTopics }) => {
  useEffect(() => {
    fetchTopics().then(({ topics: topicsFromApi }) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className="row">
      <Link to="/articles">all articles |</Link>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/${topic.slug}`}>
            {" "}
            | {topic.slug} |
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
