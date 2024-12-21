import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/Error/ErrorBoundary";
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Components/Context/AuthContext";

// components
import NotFound from "./Components/App/404/NotFound";
import BuggyComponent from "./Components/Error/Bug";
import Home from "./Components/App/Home/Home";
import Footer from "./Components/Custom/Footer/Footer";
import Nav from "./Components/Custom/Nav/Nav";
import About from "./Components/App/About/About";
import Contact from "./Components/App/Contact/Contact";

function App() {
  const { user } = useAuthContext();

  return (
    <ErrorBoundary>
      <div className="App">
        <div className="app-div">
          <Nav />

          {/* routing */}
          <Routes>
            {/* home */}
            <Route path="/" exact element={<Home />} />
            {/* about */}
            <Route path="/about-us" exact element={<About />} />
            {/* about */}
            <Route path="/contact-us" exact element={<Contact />} />

            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />

            {/* Buggy Route */}
            <Route path="/buggy" element={<BuggyComponent />} />
          </Routes>
        </div>

        {/* scroll to top BTN */}
        <ScrollToTop
          color="black"
          smooth
          width="20"
          height="20"
          className="scrollToTopBtn"
        />

        {/* footer */}
        <Footer />

        {/* custom components */}
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;
