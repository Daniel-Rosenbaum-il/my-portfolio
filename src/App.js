import { AboutMe } from "./cmps/AboutMe";
import { ContactMe } from "./cmps/ContactMe";
import { Footer } from "./cmps/Footer";
import { Header } from "./cmps/header/Header";
import { Home } from "./cmps/Home";
import { MyProjects } from "./cmps/my-projects/MyProjects";
import { BsCircleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

function App() {
  const circleRef1 = useRef();
  const circleRef2 = useRef();
  const mouseStart = useRef();

  useEffect(() => {
    mouseStart.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      mouseStart.current.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(ev) {
    // console.log(circleRef.current.style.top);
    // cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";

    circleRef1.current.style.top = circleRef2.current.style.top =
      ev.clientY + "px";
    circleRef1.current.style.left = circleRef2.current.style.left =
      ev.clientX + "px";
  }

  return (
    <div className="App" ref={mouseStart}>
      <Header />
      <Home />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
      <div class="cursor" ref={circleRef1}></div>
      <div class="cursor2" ref={circleRef2}></div>
    </div>
  );
}

export default App;
