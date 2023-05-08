import{
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Detailed from "./pages/detailed/detailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Attractions" element={<List/>}/>
      <Route path="/Attractions/:id" element={<Detailed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
