import { SimpleCarousel } from "../Components";
import {
  Navbar,
  Footer,
  BrowserLibraryHero,
  BrowseBooks,
  NewArrivalAge,
} from "../Containers";

const Blogs = () => {
  return (
    <main className="relative">
      <Navbar />
      <BrowserLibraryHero />
      <BrowseBooks />
      <NewArrivalAge />
      <SimpleCarousel text={"Habits"} />
      <Footer />
    </main>
  );
};

export default Blogs;
