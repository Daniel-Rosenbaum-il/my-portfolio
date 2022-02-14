import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiSocketdotio } from "react-icons/si";

export const MyProjects = () => {
  const gameKeysImg = require("../../assets/img/game-keys.jpg").default;
  const helloWeatherImg = require("../../assets/img/hello-weather.jpg").default;
  const theTriviaGame = require("../../assets/img/the-trivia-game.jpg").default;
  const minesweeper = require("../../assets/img/minesweeper.jpg").default;
  const uiDesign = require("../../assets/img/ui-design.jpg").default;
  const chatApp = require("../../assets/img/chat-app.jpg").default;
  return (
    <section id="my-projects" className="my-projects container">
      <h3>My Projects</h3>
      <div className="grid-projects">
        <div className="project-card">
          <img src={gameKeysImg} alt="" />
          <div className="card-info">
            <div className="card-title-git">
              <a target="_blank" href="https://game-keys.herokuapp.com/">
                <p className="card-title">Game Keys</p>
              </a>
              <a
                target="_blank"
                href="https://github.com/Daniel-Rosenbaum-il/GameKeys-frontend"
              >
                <BsGithub className="github-icon" />
              </a>
            </div>
            <p className="card-desc">
              GameKeys is a marketplace application, that allows you to add/buy
              games, add reviews, and manage your profile and much more
            </p>
            <div className="project-tags">
              <FaReact />
              <FaNodeJs />
              <DiSass />
              <AiFillHtml5 />
              <SiMongodb />
              <IoLogoJavascript />
              <SiRedux />
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={helloWeatherImg} alt="" />
          <div className="card-info">
            <div className="card-title-git">
              <a
                target="_blank"
                href="https://daniel-rosenbaum-il.github.io/hello-weather/"
              >
                <p className="card-title">Hello Weather</p>
              </a>
              <a
                target="_blank"
                href="https://github.com/Daniel-Rosenbaum-il/hello-weather"
              >
                <BsGithub className="github-icon" />
              </a>
            </div>
            <p className="card-desc">
              Hello weather is a simple weather app that allows you to search
              for forecasts in any city worldwide, you can save your favorite
              cities for easy access
            </p>
            <div className="project-tags">
              <FaReact />
              <DiSass />
              <AiFillHtml5 />
              <IoLogoJavascript />
              <SiRedux />
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={theTriviaGame} alt="" />
          <div className="card-info">
            <div className="card-title-git">
              <a
                target="_blank"
                href="https://daniel-rosenbaum-il.github.io/the-trivia-game/"
              >
                <p className="card-title">The Trivia Game</p>
              </a>
              <a
                target="_blank"
                href="https://github.com/Daniel-Rosenbaum-il/the-trivia-game"
              >
                <BsGithub className="github-icon" />
              </a>
            </div>
            <p className="card-desc">
              The Trivia Game is a simple game, kind of similar to "who wants to
              be a millionaire", packed with lots of questions and catagories
              for you to chose from
            </p>
            <div className="project-tags">
              <FaReact />
              <AiFillHtml5 />
              <IoLogoJavascript />
              <IoLogoCss3 />
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={minesweeper} alt="" />
          <div className="card-info">
            <div className="card-title-git">
              <a
                target="_blank"
                href="https://daniel-rosenbaum-il.github.io/Minesweeper/"
              >
                <p className="card-title">Minesweeper</p>
              </a>
              <a
                target="_blank"
                href="https://github.com/Daniel-Rosenbaum-il/Minesweeper"
              >
                <BsGithub className="github-icon" />
              </a>
            </div>
            <p className="card-desc">
              The classic minesweeper game, this was one of my earliest projects
              i did, enjoy playing this classic
            </p>
            <div className="project-tags">
              <AiFillHtml5 />
              <IoLogoCss3 />
              <IoLogoJavascript />
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={uiDesign} alt="" />
          <div className="card-info">
            <div className="card-title-git">
              <a
                target="_blank"
                href="https://daniel-rosenbaum-il.github.io/Modern-ui-design/"
              >
                <p className="card-title">Ui Modern Design</p>
              </a>
              <a
                target="_blank"
                href="https://github.com/Daniel-Rosenbaum-il/Modern-ui-design"
              >
                <BsGithub className="github-icon" />
              </a>
            </div>
            <p className="card-desc">
              this project is a modern ui design example, made from a figma
              design, it is pixel perfect and fully responsive. css.
            </p>
            <div className="project-tags">
              <IoLogoCss3 />
              <FaReact />
              <AiFillHtml5 />
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={chatApp} alt="" />
          <div className="card-info">
            <div className="card-title-git">
              <p className="card-title">Chat App</p>
              <a
                target="_blank"
                href="https://github.com/Daniel-Rosenbaum-il/chat-app"
              >
                <BsGithub className="github-icon" />
              </a>
            </div>
            <p className="card-desc">
              This is a simple chat application, that allows you to chat with
              others by adding them to your contacts, you can have private or
              group chat if you wish. Technology
            </p>
            <div className="project-tags">
              <FaNodeJs />
              <DiSass />
              <AiFillHtml5 />
              <IoLogoJavascript />
              <FaReact />
              <SiSocketdotio />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
