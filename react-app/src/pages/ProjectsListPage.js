import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";

const ProjectsListPage = () => {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  let getProjects = async () => {
    let response = await fetch("http://127.0.0.1:8000/project/");
    let data = await response.json();
    setProjects(data);
  };
  console.log(projects);

  return (
    <header class="d-print-none">
      <div class="container text-center text-lg-left">
        <div class="pt-4 clearfix">
          <h1 class="site-title mb-0">Walter Patterson</h1>
          <div class="site-nav">
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link" href="#about" title="About">
                    <span class="menu-title">About</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills" title="Skills">
                    <span class="menu-title">Skills</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experience" title="Experience">
                    <span class="menu-title">Experience</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#education" title="Education">
                    <span class="menu-title">Education</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#portfolio" title="Portfolio">
                    <span class="menu-title">Portfolio</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#references" title="References">
                    <span class="menu-title">References</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact" title="Contact">
                    <span class="menu-title">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectsListPage;
