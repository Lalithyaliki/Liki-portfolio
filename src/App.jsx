import Header from "./components/Header.jsx";
import MainSection from "./components/MainSection.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopBtn from "./components/BackToTopBtn.jsx";
import Projectspage from "./components/Projectspage.jsx";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/projects" element={<Projectspage />} />
      </Routes>

      <Footer />
      <BackToTopBtn />
    </>
  )

}

export default App;

