import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div style={sstyles.card}>
      <img style={sstyles.image} src={project.image} alt={project.title} />
      <div style={sstyles.content}>
        <h3 style={sstyles.title}>{project.title}</h3>
        <p style={sstyles.description}>{project.description}</p>
        <div style={sstyles.links}>
          <a href={project.url} style={sstyles.link}>
            View Live
          </a>
          <a href={project.repo} style={sstyles.link}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const sstyles = {
  card: {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  content: {
    padding: "1rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "1rem",
    lineHeight: "1.4",
    color: "#555",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    fontSize: "1rem",
    color: "#333",
    textDecoration: "none",
    border: "1px solid #333",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    transition: "all 0.3s ease-in-out",
  },
  linkHover: {
    backgroundColor: "#333",
    color: "#fff",
  },
};

const ProjectSection = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce website built with React, Redux, Node.js, and MongoDB. Includes user authentication, product search and filtering, cart functionality, and payment processing with Stripe API.",
      image: "/images/ecommerce.png",
      url: "https://example.com",
      repo: "https://github.com/example/project-name",
    },
    {
      title: "Social Media App",
      description:
        "A social media app built with React, Firebase, and Cloud Firestore. Includes user authentication, post creation and deletion, comment threading, and real-time updates.",
      image: "/images/social-media.png",
      url: "https://example.com",
      repo: "https://github.com/example/project-name",
    },
    {
      title: "Weather App",
      description:
        "A weather app built with React and the OpenWeatherMap API. Displays current weather conditions and 5-day forecast for any location in the world.",
      image: "/images/weather.png",
      url: "https://example.com",
      repo: "https://github.com/example/project-name",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Projects</h2>
      <div style={styles.cardContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
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
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "2rem",
    maxWidth: "1200px",
  },
};

export default ProjectSection;
