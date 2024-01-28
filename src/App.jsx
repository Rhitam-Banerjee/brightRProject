import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowseLibrary, Home, Genre, MyBooks, MustRead, Series } from "./Pages";
import { useDispatch } from "react-redux";
import { setisMobileDevice } from "./Features/User/userSlice";
import useWindowDimensions from "./Hooks";

const App = () => {
  const dispatch = useDispatch();
  const tabletDimension = 1130;
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= tabletDimension) dispatch(setisMobileDevice(true));
    else dispatch(setisMobileDevice(false));
  }, [width]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/brightRProject/" element={<Home />} />
        <Route
          path="/brightRProject/browseLibrary"
          element={<BrowseLibrary />}
        />
        <Route path="/brightRProject/genere" element={<Genre />} />
        <Route path="/brightRProject/series" element={<Series />} />
        <Route path="/brightRProject/mustRead" element={<MustRead />} />
        <Route path="/brightRProject/myBooks" element={<MyBooks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
