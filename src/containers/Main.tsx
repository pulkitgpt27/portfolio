import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import Greeting from "../components/Greeting/Greeting";
import "./Main.scss";

const Main = () => {
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
    <div className={isDark ? "dark-mode" : ""}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Header />
        <Greeting />
        {/* <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <StartupProject />
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
  );
};

export default Main;
