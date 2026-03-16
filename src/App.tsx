import Terminal from "./components/Terminal/Terminal";

function App() {
  return (
    <main
      className="min-h-screen w-full flex flex-col items-center"
      style={{ background: "var(--bg-primary)" }}
    >
      <Terminal />
    </main>
  );
}

export default App;
