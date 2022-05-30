import AOS from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
