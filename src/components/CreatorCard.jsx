import React from "react";
import { Link } from "react-router-dom";

const CreatorCard = ({creator, onDelete, onEdit, onView}) => {
  const {id, name, description} = creator
  return (
    <div>
      <article>
        <Link to={`/creators/${id}`}>
          <h4 style={{ hover: "red" }} className="hover-link">
            {name}
          </h4>
        </Link>
        <p>{description}</p>
        <footer role="group" className="grid">
          <button onClick={() => onView(id)}>View</button>
          <button onClick={() => onEdit(id)}>Edit</button>
          <button onClick={() => onDelete(id)}>Trash</button>
        </footer>
      </article>
    </div>
  );
};

export default CreatorCard;
