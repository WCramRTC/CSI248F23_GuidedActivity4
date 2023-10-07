import Create from "./Pages/Create";
import List from "./Pages/List";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities/:id" element={<Details />} />
          <Route path="/cities/create" element={<Create />} />
          <Route path="/cities" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
