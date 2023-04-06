import React from "react";

const ExperienceSection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Experience</h2>
      <div style={styles.job}>
        <h3 style={styles.jobTitle}>Senior Web Developer</h3>
        <h4 style={styles.company}>ABC Corporation</h4>
        <p style={styles.date}>2018 - Present</p>
        <ul style={styles.responsibilities}>
          <li>Develop high-quality web applications using React and Redux.</li>
          <li>
            Collaborate with cross-functional teams to design, develop, and
            deploy new features.
          </li>
          <li>
            Optimize website performance and improve user experience through
            code optimization and A/B testing.
          </li>
        </ul>
      </div>
      <div style={styles.job}>
        <h3 style={styles.jobTitle}>Web Designer</h3>
        <h4 style={styles.company}>XYZ Agency</h4>
        <p style={styles.date}>2015 - 2018</p>
        <ul style={styles.responsibilities}>
          <li>
            Designed and developed websites for clients using HTML, CSS, and
            JavaScript.
          </li>
          <li>Converted Photoshop designs into functional websites.</li>
          <li>
            Managed multiple projects simultaneously and met tight deadlines.
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f4f4",
    padding: "4rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "2rem",
  },
  job: {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
    marginBottom: "2rem",
    padding: "2rem",
    borderRadius: "10px",
  },
  jobTitle: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  company: {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "0.5rem",
  },
  date: {
    fontSize: "1.2rem",
    color: "#999",
    marginBottom: "1rem",
  },
  responsibilities: {
    listStyleType: "disc",
    marginLeft: "1.5rem",
    fontSize: "1.2rem",
    color: "#333",
  },
};

export default ExperienceSection;
