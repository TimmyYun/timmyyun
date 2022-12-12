import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";
const ProjectPage = ({ match }) => {
  let projectId = match.params.id;
  let [project, setProject] = useState(null);

  useEffect(() => {
    getProject();
  }, [projectId]);

  let getProject = async () => {
    let response = await fetch(`http://127.0.0.1:8000/project/${projectId}/`);
    let data = await response.json();
    setProject(data);
  };

  return (
    <div className="project">
      <div className="project-header">
        <h3>
          <Link to="/project">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={project?.name}></textarea>
      <textarea defaultValue={project?.description}></textarea>
    </div>
  );
};

export default ProjectPage;
