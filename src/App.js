import logo from "./logo.svg";
import "./App.css";
import IkeaCloset from "./components/Armadio";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 0,
        backgroundColor: "#f0f0f0",
      }}
    >
      <IkeaCloset />
      <IkeaCloset />
    </div>
  );
}

export default App;
