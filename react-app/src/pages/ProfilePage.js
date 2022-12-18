import React, { useState, useEffect } from "react";
import ProjectsListPage from "./ProjectsListPage";
import ReactDOM from "react-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaCalendarAlt,
  FaSkype,
  FaPhone,
} from "react-icons/fa";

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
                  <FaGithub size="2x" />
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
                <div className="absolute font-semibold">Download CV</div>
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
      <div className="flex h-128 min-w-fit mx-48 my-12 rounded-3xl shadow-lg shadow-slate-700 hover:shadow-2xl hover:shadow-slate-700 duration-300">
        <div className="shadow-1-strong bg-white rounded-3xl" id="about">
          <div className="flex flex-row">
            <div className="w-1/2 p-12 font-light text-lg">
              <h2 className="text-4xl mb-8">About Me</h2>
              <p>
                Hello! I’m Timur Unaspekov. I am passionate about memes. I am a
                skilled <strong>data scientist and back-end developer</strong>{" "}
                and master of memes. I am a quick learner and a team worker that
                gets the job done.
              </p>
              <p>
                I can easily capitalize on low hanging fruits and quickly
                maximize timely deliverables for real-time schemas.
              </p>
            </div>
            <div className="w-1/2 p-12 font-light text-lg">
              <div className="flex flex-col">
                <h2 className="text-4xl mb-8">Bio</h2>
                <div className="flex flex-row my-2">
                  <div className="w-1/2">
                    <strong>Age</strong>
                  </div>
                  <div className="w-1/2">
                    <div>{profile.age}</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-1/2">Email</strong>
                  <div className="w-1/2">
                    <div>{profile.email}</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-1/2">Discord</strong>
                  <div className="w-1/2">
                    <div>singsongkuss</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-1/2">Phone</strong>
                  <div className="w-1/2">
                    <div>{profile.phoneNumber}</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-1/2">Location</strong>
                  <div className="w-1/2">
                    <div>{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectsListPage />
    </div>
  );
};

export default ProfilePage;
