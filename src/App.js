import logo from "./logo.svg";
import "./App.css";
import background from "./assets/1.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100%", // Set the height of the div to 50% of its parent's height
        width: "100px", // Set the width of the div to 200 pixels
      }}
    >
      <h1>sanjee,/</h1>
    </div>
  );
}

export default App;
