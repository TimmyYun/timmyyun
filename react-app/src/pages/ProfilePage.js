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
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute h-3 w-3 rounded-full bg-sky-400 opacity-75 left-0 top-0 "></span>
                  <span className="absolute rounded-full h-3 w-3 bg-sky-500 left-0 top-0"></span>
                </span>
                <div className="absolute">Download CV</div>
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
      <div className={styles.about_me}>
        <div className={styles.about_me_section}>
          <div className={styles.about_me_section_header}> About me </div>
          <div className={styles.about_me_section_main}>
            {profile.description} AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </div>
        </div>
        <div className={styles.about_me_section}>
          <div className={styles.about_me_section_header}> Bio </div>
          <div className={styles.about_me_section_main}>
            <div className={styles.about_me_section_main_f}>
              <div className={styles.about_me_section_main_item}>Age </div>
              <div className={styles.about_me_section_main_item}>Email </div>
              <div className={styles.about_me_section_main_item}>Phone </div>
              <div className={styles.about_me_section_main_item}>Phone </div>
            </div>
            <div className={styles.about_me_section_main_s}>
              <div className={styles.about_me_section_main_item}>{profile.age}</div>
              <div className={styles.about_me_section_main_item}>{profile.email}</div>
              <div className={styles.about_me_section_main_item}>{profile.phoneNumber}</div>
              <div className={styles.about_me_section_main_item}>{profile.location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
