import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx'
import BoardPage from "./pages/BoardPage.tsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board/:id" element={<BoardPage/>}></Route>
    </Routes>
  )
}

export default App
