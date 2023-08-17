import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Detail from "./pages/Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
