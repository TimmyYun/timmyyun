import React, { useState, useEffect } from "react";
import ProjectsListPage from "./ProjectsListPage";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import header_background from "../images/header-background.jpg";
import profile_pictire from "../images/profile.jpg";
import styles from "../App.module.scss";

const ProfilePage = () => {
  let [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const profile_response = await fetch("http://127.0.0.1:8000/profile/");
    const profile_data = await profile_response.json();
    setProfile(profile_data[0]);
  };

  return (
    <div class={styles.section}>
      <div className={styles.background}>
        <img src={profile_pictire} className={styles.profile}></img>
        <div className={styles.profile_text}>
          {profile.name} {profile.surname}
        </div>
      </div>
      {/* <div class="resume-container">
          <div class="shadow-1-strong bg-white my-5" id="intro">
            <div class="bg-info text-white">
              <div class="cover bg-image">
                <img src={header_background} />
                <div class="text-center p-5">
                  <div class="avatar p-1">
                    <img
                      class="img-thumbnail shadow-2-strong"
                      src={profile_pictire}
                      width="160"
                      height="160"
                    />
                  </div>
                  <div class="header-bio mt-3">
                    <div data-aos="zoom-in" data-aos-delay="0">
                      <h2 class="h1">
                        {profile.name} {profile.surname}
                      </h2>
                      <p>Front-end Developer and Graphic Designer</p>
                    </div>
                    <div
                      class="header-social mb-3 d-print-none"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <nav role="navigation">
                        <ul class="nav justify-content-center">
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="https://twitter.com/templateflip"
                              title="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                              <span class="menu-title sr-only">Twitter</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="https://www.facebook.com/templateflip"
                              title="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                              <span class="menu-title sr-only">Facebook</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="https://www.instagram.com/templateflip"
                              title="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                              <span class="menu-title sr-only">Instagram</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="https://github.com/templateflip"
                              title="Github"
                            >
                              <i class="fab fa-github"></i>
                              <span class="menu-title sr-only">Github</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <div class="d-print-none">
                        <a
                          class="btn btn-outline-light btn-lg shadow-sm mt-1 me-3"
                          href="material-resume.pdf"
                          data-aos="fade-right"
                          data-aos-delay="700"
                        >
                          Download CV
                        </a>
                        <a
                          class="btn btn-info btn-lg shadow-sm mt-1"
                          href="#contact"
                          data-aos="fade-left"
                          data-aos-delay="700"
                        >
                          Hire Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default ProfilePage;
