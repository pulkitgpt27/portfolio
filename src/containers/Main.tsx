import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "../components/Header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import Loading from "../components/Loading/Loading";
const Greeting = lazy(() => import("../components/Greeting/Greeting"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Contact = lazy(() => import("./Contact/Contact"));
const Education = lazy(() => import("../components/Education/Education"));
const WorkExperience = lazy(() => import("./WorkExperience/WorkExperience"));
const StartupProjects = lazy(() => import("./StartupProjects/StartupProjects"));
const Top = lazy(() => import("../components/Top/Top"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const SkillProgress = lazy(() =>
  import("../components/SkillProgress/SkillProgress")
);
import "./Main.scss";

const Main: React.FC = () => {
  const [isDark, setDark] = useState(
    !!JSON.parse(`${localStorage.getItem("isDark")}`) || false
  );

  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", `${darkPref.matches}`);
    }
  }, [localStorage.getItem("isDark")]);

  useEffect(() => {
    localStorage.setItem("isDark", `${isDark}`);
  }, [isDark]);

  const changeTheme = () => {
    setDark(!isDark);
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className={isDark ? "dark-mode" : ""}>
        <StyleProvider value={{ isDark, changeTheme }}>
          <Header />
          <Greeting />
          <Skills />
          <SkillProgress />
          <Education />
          <WorkExperience />
          <StartupProjects />
          <Footer />
          <Top />
          <Contact />
          {/* <LazyLoad>
            <Projects />
          </LazyLoad> */}
          {/*
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <Top /> */}
        </StyleProvider>
      </div>
    </Suspense>
  );
};

export default Main;
