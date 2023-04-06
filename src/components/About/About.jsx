import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU "
        alt="Profile Picture"
        style={styles.image}
      />
      <div style={styles.textContainer}>
        <h2 style={styles.title}>About Me</h2>
        <p style={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus
          sit amet arcu pellentesque bibendum. Praesent laoreet velit quis
          pharetra sollicitudin. Sed vel commodo augue. Duis ut libero a quam
          semper euismod vel nec ante.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4rem",
  },
  image: {
    borderRadius: "50%",
    height: "200px",
    width: "200px",
    marginBottom: "2rem",
  },
  textContainer: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "1rem",
    textAlign: "center",
  },
  body: {
    fontSize: "1.5rem",
    color: "#666",
    lineHeight: "2rem",
    textAlign: "justify",
  },
};

export default About;
