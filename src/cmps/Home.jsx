import Typewriter from "typewriter-effect";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
export const Home = () => {
  const meImg = require("../assets/img/me.png").default;
  return (
    <section className="home ">
      <div className=" home-info container">
        <div className="short-info">
          <div className="social-media">
            <a target="_blank" href="https://www.linkedin.com/in/daniel-rosenbaum-22102a206/">
              {" "}
              <BsLinkedin />
            </a>
            <a target="_blank" href="https://github.com/daniel-rosenbaum-il">
              {" "}
              <BsGithub />
            </a>
          </div>
          <p className="my-name">
            Hello, i'm <span>Daniel</span>
          </p>
          <Typewriter
            className="hero-txt"
            options={{
              strings: ["JS, Html, Css", "Node.js, MongoDB, Express", "Building rich ui JS apps"],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
            }}
          />
          <p> Full stack developer, and web design enthusiast from Israel</p>
          <div className="btn-group">
            <a href="#contact-me">
              <button className="btn btn-outline">Hire me</button>
            </a>
            <a target="_blank" href="https://drive.google.com/file/d/1O56wVQS1PPzMrwJB3m3H6st8QWJLwhQ4/view?usp=sharing">
              <button className="btn btn-secondary">Get resume</button>
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src={meImg} alt="" />
        </div>
      </div>
    </section>
  );
};
