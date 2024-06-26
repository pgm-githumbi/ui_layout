import "./App.css";
import Navbar from "./features/nav/Navbar";
import { BrowserRouter } from "react-router-dom";
import Content from "./features/content/Content";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar>
          <Content />
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
