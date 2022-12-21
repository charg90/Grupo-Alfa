import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Afections from "./Pages/Afections/Afections";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Afections />} />
    </Routes>
  );
}

export default App;
