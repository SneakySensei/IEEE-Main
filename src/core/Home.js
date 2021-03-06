import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import Particles from "react-particles-js";
import "../App.css";
import Type from "../components/Type";
import { getAllUpcomingEvents } from "./helper/apicalls";
import { ReactComponent as LoadingIcon } from "../components/Double Ring-1s-200px.svg";
import { withRouter } from "react-router-dom";

const Home = ({ history }) => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    document.title = "Loading...";
    // document.body.style.background = "none";
    document.body.style.background = "black";
    getAllUpcomingEvents().then((data) => {
      setUpcomingEvents(data);

      document.title = "IEEE-SRM";
    });
  }, []);

  return (
    <Base>
      <div
        className="particles"
        style={{ height: "100vh", position: "relative" }}
        id="type"
      >
        <Type />
        <div className="">
          <Particles
            canvasClassName="example"
            height="100vh"
            width="120%"
            params={{
              particles: {
                number: {
                  value: 150,
                  density: {
                    enable: true,
                    value_area: 1803.4120608655228,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  type: "polygon",
                  stroke: {
                    width: 3,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 3,
                  },
                },
                opacity: {
                  value: 0.4008530152163807,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 5.5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 0,
                  color: "#ffffff",
                  opacity: 0.3687847739990702,
                  width: 0.6413648243462091,
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: false,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="container-fluid text-white">
        <div className="row mt-5" id="about">
          <div className="col-12 text-center">
            <h1 className="font-weight-bold">ABOUT US</h1>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6 text-center">
              <img
                src={require("./Asset 1.png")}
                alt=""
                className="m-auto"
                style={{
                  maxWidth: "300px",
                  marginTop: "-38px",
                }}
              />
            </div>
            <div
              className="col-lg-5 offset-lg-0 offset-sm-1 col-sm-10 mt-4 pr-md-4"
              id="about-text"
            >
              <h6>
                <div className="row">
                  <div className="col-11 text-center">
                    <h6>
                      <b className="ludwig" style={{ lineHeight: "40px" }}>
                        There’s no power for change greater than a community
                        discovering what it cares about.
                      </b>
                    </h6>
                  </div>
                </div>
                <p className="about-para">
                  IEEE SRM is not just any student club rather a prolific
                  student chapter and multitude of the scholarly that aims in
                  advancing technology for Humanity reminds the technology
                  community and the world that IEEE stands at the forefront of
                  technological change for the betterment of humanity. No matter
                  how advanced technology gets, there will always be a divide
                  keeping us from truly knowing a few work-related domains. Here
                  at IEEE, we bridge that gap with engaging activities across
                  various such domains, where no work goes obscure. Every
                  student, every passion and every interest matters to us and
                  all are well-addressed and acknowledged. It is also a
                  shared-platform for the exultant upbringing of new ideas or
                  projects into furtherance.
                </p>
              </h6>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h1 className="font-weight-bold">OUR VISION</h1>
          </div>
          <br />
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h6>
                <b className="ludwig" style={{ lineHeight: "45px" }}>
                  Innovate. Edify. Experience. Excel.
                </b>
                <p className="about-para">
                  IEEE SRM is a prolific student chapter that aims to inspire
                  professionalism and empower students, help them learn and
                  implement new skills and technologies, gain exemplary
                  knowledge through various engaging workshops and webinars,
                  experience in fields of interest like application and website
                  development, robotics and automation, consumer and power
                  electronics, engineering, media, corporate and content
                  writing, carry out research, publish papers, establish a
                  professional profile and network with esteemed IEEE alumni
                  across the globe, and develop projects that greatly benefit
                  mankind.
                </p>
              </h6>
            </div>
          </div>
        </div>

        <div className="row mt-5" id="upevents" style={{ minHeight: "190px" }}>
          <div className="col-12 text-center mt-5">
            <h1 className="font-weight-bold">Upcoming Events</h1>
          </div>
          <br />
          {upcomingEvents &&
            !upcomingEvents.error &&
            upcomingEvents.length === 0 && (
              <div className=" col-12 mt-4 text-center">
                <LoadingIcon />
              </div>
            )}
          {upcomingEvents && upcomingEvents.error && (
            <div className=" col-12 mt-4 text-center">
              <h5>
                We Are Planning Something Great. Stick Around To Find Out Soon.
              </h5>
            </div>
          )}
          {upcomingEvents &&
            !upcomingEvents.error &&
            upcomingEvents.length !== 0 &&
            upcomingEvents.map((upcomingEvent, i) => {
              return (
                <div
                  className=" col-sm-12  mt-4 text-center"
                  style={{ backgroundColor: "black", cursor: "pointer" }}
                  onClick={() => history.push(`/event/${upcomingEvent._id}`)}
                >
                  <div class="card" style={{ backgroundColor: "black" }}>
                    <div class="row mx-auto">
                      <div
                        class="col-12 py-2"
                        style={{
                          background: "rgb(30,30,30)",
                          borderRadius: "5px",
                          border: "solid 2px #4D91B3",
                        }}
                      >
                        <div className="row">
                          <div className="col-3">
                            <img
                              src={`https://ieee-srm-sb.herokuapp.com/api/upcomingevent/icon/${upcomingEvent._id}`}
                              className="img1"
                              alt=""
                            />
                          </div>
                          <div
                            class="card-block p-2 col-9"
                            style={{ textAlign: "center" }}
                          >
                            <p
                              class="card-title h3 mt-1 text-center"
                              id="nameEvent"
                              style={{
                                paddingLeft: "1rem",
                                paddingRight: "0.5rem",
                              }}
                            >
                              {upcomingEvent.name}
                            </p>
                            {upcomingEvent.from === upcomingEvent.to && (
                              <h4
                                class="card-body h4"
                                style={{
                                  position: "absolute",
                                  right: "0",
                                  bottom: "0",
                                  fontWeight: "bold",
                                  marginBottom: "-20px",
                                }}
                              >
                                Date: {upcomingEvent.from}
                              </h4>
                            )}
                            {upcomingEvent.from !== upcomingEvent.to && (
                              <h4
                                class="card-body h4 text-left"
                                style={{
                                  position: "absolute",
                                  right: "0",
                                  bottom: "0",
                                  fontWeight: "bold",
                                  marginBottom: "-20px",
                                }}
                              >
                                From: {upcomingEvent.from} <br /> To:{" "}
                                {upcomingEvent.to}
                              </h4>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4"></div>
        </div>
      </div>
    </Base>
  );
};

export default withRouter(Home);
