import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowseLibrary, Home, Blogs, MyBooks } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/brightRProject/" element={<Home />} />
        <Route
          path="/brightRProject/browseLibrary"
          element={<BrowseLibrary />}
        />
        <Route path="/brightRProject/blogs" element={<Blogs />} />
        <Route path="/brightRProject/myBooks" element={<MyBooks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
