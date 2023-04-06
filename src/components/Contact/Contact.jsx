import React from "react";

const ContactUsSection = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <form style={styles.form}>
        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          style={styles.input}
        />

        <label htmlFor="phone" style={styles.label}>
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          style={styles.input}
        />

        <label htmlFor="message" style={styles.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
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
  title: {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "500px",
    width: "100%",
  },
  label: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "0.5rem",
    alignSelf: "flex-start",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1.2rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#f8f8f8",
  },
  textarea: {
    padding: "0.5rem",
    fontSize: "1.2rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "1rem",
    width: "100%",
    height: "200px",
    maxWidth: "400px",
    backgroundColor: "#f8f8f8",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    textDecoration: "none",
    transition: "background-color 0.2s ease",
    margin: "1rem",
    alignSelf: "flex-start",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  buttonHover: {
    backgroundColor: "#3e8e41",
  },
};

export default ContactUsSection;
