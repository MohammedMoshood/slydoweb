import "./App.css";
import FrontPage from "./pages/FrontPage";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage/>} />
    </Routes>
  );
}

export default App;
