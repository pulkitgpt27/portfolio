/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section
import emoji from "react-easy-emoji";
import ipu1 from "../assets/images/ipu1.png";
import rosary from "../assets/images/rosary.png";
import atlassianLogo from "../assets/images/atlassian.png";
import logo from "../../src/logo.svg";
import navyug from "../assets/images/navyug.png";
import abh2 from "../assets/images/ABH2.jpeg";
import kapalya from "../assets/images/kapalya.png";
import doprep from "../assets/images/doprep.png";

function yearsSince(dateString: string): number {
  const givenDate: Date = new Date(dateString);
  const now: Date = new Date();

  let years: number = now.getFullYear() - givenDate.getFullYear();

  const hasNotCompletedYear: boolean =
    now.getMonth() < givenDate.getMonth() ||
    (now.getMonth() === givenDate.getMonth() && now.getDate() < givenDate.getDate());

  if (hasNotCompletedYear) {
    years--;
  }

  return years;
}

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Pulkit Gupta",
  title: "Hi all, I'm Pulkit",
  subTitle: 
    `A passionate Full Stack Software Developer 🚀 having ${yearsSince('2018-05-01')} Years of experience in building Web and Mobile applications with JavaScript / Reactjs / Cordova / React Native (basic)/ Ruby On Rails and some other cool libraries and frameworks.`,
  resumeLink:
    "https://drive.google.com/file/d/1KxcXX9FoRgsSg8YGjXJLJguR49zGyT1g/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pulkitgpt27",
  linkedin: "https://www.linkedin.com/in/pulkitgupta28",
  gmail: "pulkitgpt27@gmail.com",
  facebook: "https://www.facebook.com/pulkit.gupta.104",
  stackoverflow: "https://stackoverflow.com/users/16664953/pulkit-gupta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};


// Skills Section
const skillsSection = {
  title: "My Tech Stack",
  subTitle:
    "FULL STACK DEVELOPER WHO AIMS AT BUILDING OPTIMIZED AND RESPONSIVE WEB APPS",
  skills: ["⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications","⚡ Progressive Web Applications ( PWA )",
    "⚡ Integration of third party services such as Microsoft/ AWS / Twilio"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "postgres-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "ember",
      fontAwesomeClassname: "fab fa-ember"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BPIT (IP University)",
      logo: ipu1,
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "Aug 2014 - July 2018",
      desc: "Percentage: 85%",
      descBullets: []
    },
    {
      schoolName: "Rosary Sen Secondary School",
      logo: rosary,
      subHeader: "Senior Secondary",
      duration: "2012 - 2014",
      desc: "Percentage: 95%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE - II",
      company: "Atlassian",
      companylogo: atlassianLogo,
      rgbColor: ["24", "104", "219"],
      date: "Nov 2021 – Present",
      desc: "Responsible for developing features used by millions of users",
      descBullets: [
        "Migrated from Webpack to Parcel, improving development build times by 50%",
        "Enabled multiple help centers, contributing to a 2.8% growth in premium customers and increased revenue impacting 1 million+ helpseekers.",
        "Implemented dark mode in the UI through token modernization used by 80,000+ customers."
      ]
    },
    {
      role: "Software Engineer",
      company: "Navyug",
      companylogo: navyug,
      rgbColor: ["45", "86", "171"],
      date: "June 2018 – Present",
      desc:
        "Reponsible for creating optimized and responsive web apps and PWA's as well as wrap it to Android/IOS/Ubuntu app",
      descBullets: [
        "Implement Elasticsearch to reduce search query time by 90%",
        "Managed a team of 3 developers to deliver a military project before time",
        "Constant client interactions, Suggesting them the best solutions to a problem",
        "Optimized Frontend/Backend/Network of a project"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects 🚀",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: abh2,
      projectName: "A Billion Hopes",
      projectDesc: "Crowd Funding Platform",
      url: "https://abillionhopes.com/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://abillionhopes.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: kapalya,
      projectName: "Kapalya",
      projectDesc: "Encryption Management Platform",
      url: "https://www.kapalya.com/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kapalya.com/"
        }
      ]
    },
    {
      image: doprep,
      projectName: "DoPrep",
      projectDesc: "Students Preparation Platform",
      url: "https://doprep.com/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://doprep.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: logo,
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: logo,
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: logo,
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@pulkitgupta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/pulkit-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi. Want to create your portfolio? My Inbox is open for all",
  number: "+91-8527213450",
  email_address: "pulkitgpt27@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", // Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
