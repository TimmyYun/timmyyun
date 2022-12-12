import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="projects-list-item">
        <h3>{project.name}</h3>
        <h3>{project.description}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
