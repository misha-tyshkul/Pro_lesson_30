import "./App.css";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import MainContent from "./components/Main-content.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <MainContent text="Hello world"></MainContent>
    </div>
  );
}

export default App;
