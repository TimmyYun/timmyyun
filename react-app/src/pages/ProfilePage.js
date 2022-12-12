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
      <div class="bg-light" id="top">
        <div class="d-print-none">
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
        </div>
      </div>
      <div class="page-content">
        <div class="container">
          <div class="resume-container">
            <div className="bg-info text-white">
              <div className="cover bg-image">
                <img src="https://i.imgur.com/5oT6ubI.jpg" />
                <div className="mask">
                  <div className="text-center p-5">
                    <div className="avatar p-1">
                      <img
                        className="img-thumbnail shadow-2-strong"
                        src="https://i.imgur.com/ew0MSGa.jpeg"
                        width="160"
                        height="160"
                      />
                    </div>
                    <div class="header-bio mt-3">
                      <div data-aos="zoom-in" data-aos-delay="0">
                        <h2 class="h1">
                          {profile.name} {profile.surname}
                        </h2>
                        <p>{profile.title}</p>
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
                                href="https://www.linkedin.com/in/timur-unaspekov-9017261b7/"
                                title="LinkedIn"
                              >
                                <i className="fa fa-linkedin"></i>
                                <span class="menu-title sr-only">LinkedIn</span>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="https://www.instagram.com/singsongkuss/"
                                title="Instagram"
                              >
                                <i className="fa fa-instagram"></i>
                                <span class="menu-title sr-only">
                                  Instagram
                                </span>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="https://github.com/TimmyYun"
                                title="Github"
                              >
                                <i className="fa fa-github"></i>
                                <span class="menu-title sr-only">Github</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
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
        </div>
      </div>
    </div>

    //   {/* <div class="shadow-1-strong bg-white my-5 p-5" id="about">
    //     <div class="about-section">
    //       <div class="row">
    //         <div class="col-md-6">
    //           <h2 class="h2 fw-light mb-4">About Me</h2>
    //           <p>
    //             Hello! I’m Walter Patterson. I am passionate about UI/UX design
    //             and Web Design. I am a skilled{" "}
    //             <strong>front-end developer</strong> and master of graphic
    //             design tools such as Photoshop and Sketch. I am a quick learner
    //             and a team worker that gets the job done.
    //           </p>
    //           <p>
    //             I can easily capitalize on low hanging fruits and quickly
    //             maximize timely deliverables for real-time schemas.
    //           </p>
    //         </div>
    //         <div class="col-md-5 offset-lg-1">
    //           <div class="row mt-2">
    //             <h2 class="h2 fw-light mb-4">Bio</h2>
    //             <div class="col-sm-5">
    //               <div class="pb-2 fw-bolder">
    //                 <i
    //                   class="far fa-calendar-alt pe-2 text-muted"
    //                   style="width:24px;opacity:0.85;"
    //                 ></i>{" "}
    //                 Age
    //               </div>
    //             </div>
    //             <div class="col-sm-7">
    //               <div class="pb-2">28</div>
    //             </div>
    //             <div class="col-sm-5">
    //               <div class="pb-2 fw-bolder">
    //                 <i
    //                   class="far fa-envelope pe-2 text-muted"
    //                   style="width:24px;opacity:0.85;"
    //                 ></i>{" "}
    //                 Email
    //               </div>
    //             </div>
    //             <div class="col-sm-7">
    //               <div class="pb-2">walter@company.com</div>
    //             </div>
    //             <div class="col-sm-5">
    //               <div class="pb-2 fw-bolder">
    //                 <i
    //                   class="fab fa-skype pe-2 text-muted"
    //                   style="width:24px;opacity:0.85;"
    //                 ></i>{" "}
    //                 Skype
    //               </div>
    //             </div>
    //             <div class="col-sm-7">
    //               <div class="pb-2">username@skype.com</div>
    //             </div>
    //             <div class="col-sm-5">
    //               <div class="pb-2 fw-bolder">
    //                 <i
    //                   class="fas fa-phone pe-2 text-muted"
    //                   style="width:24px;opacity:0.85;"
    //                 ></i>{" "}
    //                 Phone
    //               </div>
    //             </div>
    //             <div class="col-sm-7">
    //               <div class="pb-2">+0718-111-0011</div>
    //             </div>
    //             <div class="col-sm-5">
    //               <div class="pb-2 fw-bolder">
    //                 <i
    //                   class="fas fa-map-marker-alt pe-2 text-muted"
    //                   style="width:24px;opacity:0.85;"
    //                 ></i>{" "}
    //                 Address
    //               </div>
    //             </div>
    //             <div class="col-sm-7">
    //               <div class="pb-2">131 W, City Center, New York, U.S.A</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}

    // <div>
    //   <div className="wrapper">
    //     <h2 className="profile-information-left">
    //       {profile.location}
    //       <br /> {profile.email}
    //     </h2>
    // <div className="profile">
    //   <div className="overlay">
    //     <div className="about d-flex flex-column">
    //       <h4></h4> <span>Data Scientist</span>
    //     </div>
    //     <ul className="social-icons">
    //       <a href="https://www.linkedin.com/in/timur-unaspekov-9017261b7/">
    //         <li>
    //           <i className="fa fa-linkedin"></i>
    //         </li>
    //       </a>
    //       <a href="https://github.com/TimmyYun">
    //         <li>
    //           <i className="fa fa-github"></i>
    //         </li>
    //       </a>
    //       <a href="https://www.instagram.com/singsongkuss/">
    //         <li>
    //           <i className="fa fa-instagram"></i>
    //         </li>
    //       </a>
    //     </ul>
    //   </div>
    // </div>
    //     <h2 className="profile-information-right">
    //       {profile.phoneNumber}
    //     </h2>
    //   </div>
    //     <ProjectsListPage />
    // </div>
  );
};

export default ProfilePage;
