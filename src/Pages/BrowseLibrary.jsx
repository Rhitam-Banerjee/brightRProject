import { SimpleCarousel } from "../Components";
import {
  Navbar,
  Footer,
  BrowserLibraryHero,
  BrowseBooks,
  NewArrivalAge,
} from "../Containers";

const BrowseLibrary = () => {
  return (
    <main className="relative">
      <Navbar />
      <BrowserLibraryHero />
      <BrowseBooks />
      <NewArrivalAge />
      <SimpleCarousel text={"Peppa Pig"} />
      <Footer />
    </main>
  );
};

export default BrowseLibrary;
