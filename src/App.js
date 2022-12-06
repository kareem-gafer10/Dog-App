import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import DogDetails from "./Components/DogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<DogDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
