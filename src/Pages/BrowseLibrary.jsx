import { BestSellersPopular } from "../Components";
import { Navbar, Footer, BrowserLibraryHero, BrowseBooks } from "../Containers";

const BrowseLibrary = () => {
  return (
    <main className="relative">
      <Navbar />
      <BrowserLibraryHero text={"Age Group"} />
      <BestSellersPopular />
      <BrowseBooks />
      <Footer />
    </main>
  );
};

export default BrowseLibrary;
