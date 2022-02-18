import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  console.log(props);

  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
            {/* /about/about-app => chemin qui apparaitra dans l'url / about-app => Slug */}
          <Link to={`/about/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`/about/about-author`}>About Author</Link>
        </li>
        <li>
          <Link to={`/about/about-test`}>About test</Link>
        </li>
      </ul>
    </div>
  );
};
export default About;
