import React, { useState, useEffect } from "react";
import ProjectsListPage from "./ProjectsListPage";
import ReactDOM from "react-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import profile_pictire from "../images/profile.jpg";
import styles from "../App.module.scss";

const ProfilePage = () => {
  let [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    let profile_response = await fetch("http://127.0.0.1:8000/profile/");
    let profile_data = await profile_response.json();
    setProfile(profile_data[0]);
  };

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.overlay}>
          <img
            src={profile_pictire}
            className={styles.profile_image}
            alt="profile_picture"
          />
          <div className={styles.profile_text_container}>
            <div className={styles.profile_text}>
              {profile.name} {profile.surname}
            </div>
            <div className={styles.profile_text}>{profile.title}</div>
          </div>
          <div className={styles.profile_text_container}>
            <div className={styles.profile_nav}>
              <div className={styles.profile_nav_item}>
                <a href="https://github.com/TimmyYun" title="Github">
                  <FaGithub size="2x" href="https:twitter.com/templateflip" />
                </a>
              </div>
              <div className={styles.profile_nav_item}>
                <a
                  href="https://www.linkedin.com/in/timur-unaspekov-9017261b7/"
                  title="LinkedIn"
                >
                  <FaLinkedin size="2x" />
                </a>
              </div>
              <div className={styles.profile_nav_item}>
                <a
                  href="https://www.instagram.com/singsongkuss/"
                  title="Instgram"
                >
                  <FaInstagram size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.profile_text_container}>
            <div className={styles.profile_links}>
              <a
                className={styles.profile_links_item}
                href="../material-resume.pdf"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                Download CV
              </a>
              <a
                className={styles.profile_links_item}
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
      {/* 
                      <div className="d-print-none">
                        
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
