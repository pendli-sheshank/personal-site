import React from "react";
import "./Experience.css";

const Experience = (props) => {
  return (
    <section className="experience-container">
      <h2 className="section-heading">Design Experience</h2>
      <div className="job-container">
        <div className="job-card">
          <h3 className="job-title">Graphic Designer</h3>
          <p className="job-date">June 2018 - Present</p>
          <p className="job-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
            bibendum nisl. Suspendisse laoreet turpis quis velit ultrices
            congue.
          </p>
        </div>
        <div className="job-card">
          <h3 className="job-title">UI/UX Designer</h3>
          <p className="job-date">May 2015 - June 2018</p>
          <p className="job-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
            bibendum nisl. Suspendisse laoreet turpis quis velit ultrices
            congue. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
