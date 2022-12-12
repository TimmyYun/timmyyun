import React, { useState, useEffect } from "react";
import ProjectsListPage from "./ProjectsListPage";

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
    <div>
      <div className="wrapper">
        <h2 className="profile-information">
          {profile.location}
          <br /> {profile.email}
        </h2>
        <div className="profile">
          <div className="overlay">
            <div className="about d-flex flex-column">
              <h4></h4> <span>Data Scientist</span>
            </div>
            <ul className="social-icons">
              <a href="https://www.linkedin.com/in/timur-unaspekov-9017261b7/">
                <li>
                  <i className="fa fa-linkedin"></i>
                </li>
              </a>
              <a href="https://github.com/TimmyYun">
                <li>
                  <i className="fa fa-github"></i>
                </li>
              </a>
              <a href="https://www.instagram.com/singsongkuss/">
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <h2 className="profile-information">
          ---------------{profile.phoneNumber}
        </h2>
      </div>
      <ProjectsListPage />
    </div>
  );
};

export default ProfilePage;
