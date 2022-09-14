import logo from "./logo.svg";
import "./App.css";

function App() {
  let url = window.location.origin;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Hello Team</h4>
        <h5>This application is running in Cloud Run </h5>
        URL: {url}
      </header>
    </div>
  );
}

export default App;
