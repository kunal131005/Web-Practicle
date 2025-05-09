import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BlogProvider } from "./context/BlogContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BlogProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </BlogProvider>
  );
}

export default App;
