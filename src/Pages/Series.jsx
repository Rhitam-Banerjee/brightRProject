import { Navbar, Footer, BrowserLibraryHero, BrowseBooks } from "../Containers";
const Series = () => {
  return (
    <main className="relative">
      <Navbar />
      <BrowserLibraryHero text={"Series"} />
      <BrowseBooks />
      <Footer />
    </main>
  );
};

export default Series;
