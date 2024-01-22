import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowseLibrary, Home, Blogs, MyBooks } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browseLibrary" element={<BrowseLibrary />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myBooks" element={<MyBooks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
