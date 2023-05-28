import React, { useState, useEffect } from "react";
import ProjectsListPage from "./ProjectsListPage";
import ReactDOM from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
    AOS.init();
    getProfile();
  }, []);

  const getProfile = async () => {
    let profile_response = await fetch("https://timmyyunheroku.herokuapp.com/api/profile/");
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
          <div
            className={styles.profile_text_container}
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div className={styles.profile_text}>
              {profile.name} {profile.surname}
            </div>
            <div className={styles.profile_text}>{profile.title}</div>
          </div>
          <div
            className={styles.profile_text_container}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
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
                <span className={styles.animatedping}>
                  <span className={styles.dot}></span>
                  <span className={styles.ping}></span>
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
      <div className="flex h-96 min-w-fit mx-72 my-12  shadow-lg shadow-slate-700 hover:shadow-2xl hover:shadow-slate-600 duration-300">
        <div className="flex shadow-1-strong bg-white " id="about">
          <div className="flex flex-row font-inter">
            <div className="w-1/2 p-12 font-light text-lg">
              <h2 className="text-4xl mb-8">About Me</h2>
              <p>
              I'm a skilled data scientist and software engineer experienced in high-performance computing, deep learning, PyTorch, and Python programming. I've developed thermal image processing and person verification models and conducted research with encoder architectures and transformers. I've also worked as a software engineer and data scientist, applying advanced statistical and machine learning techniques to develop accurate client clustering and scoring systems. Additionally, I'm the President of DataSci, a student organization that organizes and promotes Data Science events.              </p>
            </div>
            <div className="flex w-1/2 p-12 font-light text-lg">
              <div className="flex flex-col">
                <h2 className="flex text-4xl mb-8">Bio</h2>
                <div className="flex flex-row my-2">
                  <div className="w-28">
                    <strong>Age</strong>
                  </div>
                  <div className="w-1/2">
                    <div>{profile.age}</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-28">Email</strong>
                  <div className="w-1/2">
                    <div>{profile.email}</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-28">Discord</strong>
                  <div className="w-1/2">
                    <div>singsongkuss</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-28">Phone</strong>
                  <div className="w-1/2">
                    <div>{profile.phoneNumber}</div>
                  </div>
                </div>
                <div className="flex flex-row my-2">
                  <strong className="w-28">Location</strong>
                  <div className="w-1/2">
                    <div>{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
