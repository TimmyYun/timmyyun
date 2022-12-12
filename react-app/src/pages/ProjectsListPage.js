import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const ProjectsListPage = () => {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, [])

  let getProjects = async () => {
    let response = await fetch("http://127.0.0.1:8000/project/");

    let data = await response.json();
    setProjects(data);
  };

  return (
    <div className="projects">
      <div className="projects-header">
        <h2 className="projects-title">&#x2726; Projects</h2>
        <p className="projects-count">{projects.length}</p>

      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ListItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsListPage;
