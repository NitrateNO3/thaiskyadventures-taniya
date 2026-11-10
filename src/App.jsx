import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Tandem from "./pages/Tandem";
import Courses from "./pages/Courses";
import Licensed from "./pages/Licensed";
import Travel from "./pages/Travel";
import Accommodation from "./pages/Accommodation";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/tandem-skydiving" element={<Page><Tandem /></Page>} />
          <Route path="/courses" element={<Page><Courses /></Page>} />
          <Route path="/licensed-skydivers" element={<Page><Licensed /></Page>} />
          <Route path="/travel" element={<Page><Travel /></Page>} />
          <Route path="/accommodation" element={<Page><Accommodation /></Page>} />
          <Route path="/gallery" element={<Page><Gallery /></Page>} />
          <Route path="/faqs" element={<Page><FAQs /></Page>} />
          <Route path="/articles" element={<Page><Articles /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
