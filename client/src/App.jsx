export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nomad</h1>

      <p style={styles.subtitle}>
        Discover hobbies you’ll actually enjoy — from home, online, or in your city.
      </p>

      <button style={styles.button} onClick={() => alert("Start survey next")}>
        Start Exploring
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    maxWidth: "400px",
    opacity: 0.7,
    marginBottom: "30px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};