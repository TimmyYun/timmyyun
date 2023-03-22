import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link, useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectId } = useParams();
  let [project, setProject] = useState("");
  useEffect(() => {
    getProject();
  }, [projectId]);

  let getProject = async () => {
    let response = await fetch(`https://timmyyunheroku.herokuapp.com/project/${projectId}/`);
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
