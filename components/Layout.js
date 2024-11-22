import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Pokedex</h1>
      </header>
      <main style={styles.main}>{children}</main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#ffcb05",
    padding: "15px",
  },
  main: {
    padding: "20px",
  },
};

export default Layout;

