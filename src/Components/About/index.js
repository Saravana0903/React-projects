import "./index.css";

const About = () => {
  return (
    <div className="bg-about">
      <div className="about-me">
        <h1 className="main-head">About Me</h1>
        <p className="des">
          I am Full-Stack developer having decent Knowledge in
          HTML,CSS,JavaScript,React JS,SQl, Python,Node JS and Express JS. I am
          capable in writing an efficient code to a problem by thinking in a
          critical way of approach. Python is my preferred Backend Language.
          Although, Iam comfortable in C and JAVA. I have developed many
          Websites with my knowledge in Web development using Rest API calls.
        </p>
        <h1 className="main-head">Skills</h1>
        <div className="skills-div">
          <div className="div-right">
            <div className="skill">
              <p className="skill-name">HTML</p>
              <div className="out-div">
                <div className="in-div">
                  <p className="percent-des">95%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">CSS</p>
              <div className="out-div">
                <div className="in-div">
                  <p className="percent-des">95%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">JavaScript</p>
              <div className="out-div">
                <div className="in-div">
                  <p className="percent-des">95%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="div-left">
            <div className="skill">
              <p className="skill-name">React JS</p>
              <div className="out-div">
                <div className="in-div-1">
                  <p className="percent-des">85%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">Python</p>
              <div className="out-div">
                <div className="in-div">
                  <p className="percent-des">95%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">SQL</p>
              <div className="out-div">
                <div className="in-div-1">
                  <p className="percent-des">85%</p>
                </div>
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">Node JS</p>
              <div className="out-div">
                <div className="in-div-1">
                  <p className="percent-des">85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
