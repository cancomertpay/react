import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Details, Home, Card, Search } from "./pages";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div >
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/card" element={<Card />} />
            <Route path="/products/:search" element={<Search />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
