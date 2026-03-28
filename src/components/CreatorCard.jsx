import React from "react";
import { Link } from "react-router-dom";

const CreatorCard = () => {
  return (
    <div>
      <article>
        <Link to={`/creators/3`}>
          <h4 style={{ hover: "red" }} className="hover-link">
            Name
          </h4>
        </Link>
        <p>Description</p>
        <footer role="group" className="grid">
          <button>View</button>
          <button>Edit</button>
          <button>Trash</button>
        </footer>
      </article>
    </div>
  );
};

export default CreatorCard;
