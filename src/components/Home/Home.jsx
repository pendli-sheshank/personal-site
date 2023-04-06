import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to my website</h1>
      <p style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus
        sit amet arcu pellentesque bibendum. Praesent laoreet velit quis
        pharetra sollicitudin.
      </p>
      <button style={styles.button}>Learn More</button>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "4rem",
    color: "#333",
    marginBottom: "1rem",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "2rem",
    color: "#666",
    maxWidth: "80%",
    marginBottom: "2rem",
    textAlign: "center",
  },
  button: {
    fontSize: "1.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "0.3rem",
    cursor: "pointer",
  },
};

export default Home;
