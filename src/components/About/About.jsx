import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  let navigate = useNavigate();
  let isHovered = false;
  return (
    <>
      <div className="About-screen">
        <div className="About-main-container">
          <span
            className="About-Initial"
            onClick={() => {
              navigate("/");
            }}
          ></span>
          <div className="About-Container">
            <div className="About-Heading">
              <h1>I designed & build </h1>
            </div>
            <div className="About-container-Content">
              <span className="About-content-head">About</span>
              <div className="About-content">
                <div className="About-Bold-about">
                  Hello, I'm Kushal, a passionate Front-End Enthusiast, and I'm
                  thrilled to share my journey and expertise with you. With one
                  year of immersive experiences in the ever-evolving field of
                  web development, I have cultivated a diverse skill set that
                  spans across a myriad of technologies.
                </div>
                <div className="About-texter">
                  My journey in the world of coding began with a fascination for
                  JavaScript and TypeScript, the dynamic duo that powers the
                  interactivity of modern web applications. This fascination
                  evolved into a mastery of frameworks like Angular and React,
                  where I honed my ability to create robust, responsive, and
                  user-friendly interfaces. HTML and CSS became my canvas, and I
                  explored the nuances of styling and layout to bring designs to
                  life
                </div>
                <div className="About-texter">
                  As a firm believer in staying ahead of the curve, my toolkit
                  expanded to include Tailwind and Bootstrap, empowering me to
                  streamline the styling process and deliver visually stunning
                  user experiences. Redux-Toolkit became my ally in managing
                  state efficiently, ensuring seamless data flow within my
                  applications. The integration of Firebase brought real-time
                  functionality to my projects, adding a layer of dynamism that
                  resonates with the modern user.
                </div>
                <div className="About-texter">
                  I've had the privilege of contributing to impactful projects,
                  leaving my mark on endeavors like Guaranteed and VideoWiki.
                  These experiences not only enriched my technical skill set but
                  also instilled in me the importance of user-centric design and
                  functionality.
                </div>
                <div className="About-texter">
                  Beyond the conventional, I delved into the realms of Web3 and
                  MetaMask, navigating the complexities of blockchain
                  integration. This venture into decentralized technologies
                  opened up new possibilities for creating secure and
                  transparent web experiences. My exploration further extended
                  to OpenAI's revolutionary technology, where I actively
                  participated in integration projects, pushing the boundaries
                  of what's possible in the realm of conversational AI.
                </div>
                <div className="About-texter">
                  A significant aspect of my journey is my commitment to
                  knowledge-sharing and community building. My Medium blog
                  serves as a platform where I distill my experiences into
                  insightful articles. One notable piece is a comprehensive
                  guide on creating a personalized ChatGPT, where I demystify
                  the process into simple steps for fellow enthusiasts.
                </div>
                <div className="About-texter">
                  In the vast and ever-evolving landscape of front-end
                  development, I consider myself not just a developer but a
                  trailblazer. I find joy in pushing boundaries, experimenting
                  with emerging technologies, and embracing the continuous
                  learning journey that defines our field.
                </div>
                <div className="About-texter">
                  Join me on this journey where innovation meets creativity, and
                  let's shape the future of web development together.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
