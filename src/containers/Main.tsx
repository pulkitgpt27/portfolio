import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "../components/Header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import Loading from "../components/Loading/Loading";
import LazyLoad from "../components/LazyLoad/LazyLoad";
const Greeting = lazy(() => import("../components/Greeting/Greeting"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Education = lazy(() => import("../components/Education/Education"));
const WorkExperience = lazy(() => import("./WorkExperience/WorkExperience"));
const StartupProjects = lazy(() => import("./StartupProjects/StartupProjects"));
const Top = lazy(() => import("../components/Top/Top"));
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
          <LazyLoad>
            <Greeting />
          </LazyLoad>
          <LazyLoad>
            <Skills />
          </LazyLoad>
          <LazyLoad>
            <SkillProgress />
          </LazyLoad>
          <LazyLoad>
            <Education />
          </LazyLoad>
          <LazyLoad>
            <WorkExperience />
          </LazyLoad>
          <LazyLoad>
            <StartupProjects />
          </LazyLoad>
          <Top />
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
          <Footer />
          <Top /> */}
        </StyleProvider>
      </div>
    </Suspense>
  );
};

export default Main;
