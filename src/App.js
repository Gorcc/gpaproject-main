import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";

import GPACalculator from "./GPACalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Admin />} />
          <Route path="Layout" element={<Layout />} />
          <Route path="homepage" element={<GPACalculator />} />
          <Route path="gpacalculator" element={<GPACalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
