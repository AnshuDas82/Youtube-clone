import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import Main from "./components/Main";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <Navbar setIsExpanded={setIsExpanded} />
      <div className="flex">
        <div className="div">
          <Side isExpanded={isExpanded} />
        </div>
        <Main isExpanded={isExpanded} />
      </div>
    </div>
  );
}

export default App;
