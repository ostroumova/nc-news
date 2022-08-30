import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../api";

const Nav = ({ topics, setTopics }) => {
  const [isCatchError, setCatchError] = useState(false);

  useEffect(() => {
    fetchTopics()
      .catch(() => {
        setCatchError(true);
      })
      .then(({ topics: topicsFromApi }) => {
        setTopics(topicsFromApi);
      });
  }, [setTopics]);

  if (isCatchError === true) {
    return (
      <div className="errorMessage">
        <p>Something went wrong. Please check and try again!</p>
      </div>
    );
  }

  return (
    <nav className="row">
      <Link to="/articles">all articles |</Link>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/topics/${topic.slug}`}>
            {" "}
            | {topic.slug} |
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
