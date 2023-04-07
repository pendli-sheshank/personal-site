import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <section className="about-container">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <p>
          Hi, my name is [Your Name] and I am a [Your Profession]. I have been
          working in this field for [Number of Years] years and have experience
          in [List Your Skills].
        </p>
        <img
          src="[Image URL]"
          alt="[Image Description]"
          className="about-image"
        />{" "}
        {/* add an image section */}
        <p>
          In my free time, I enjoy [Your Hobbies or Interests]. I also like to
          work on personal projects such as [Your Personal Projects].
        </p>
      </div>
    </section>
  );
};

export default About;
