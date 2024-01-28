import { Navbar, Footer, BrowserLibraryHero, BrowseGenre } from "../Containers";

const Genre = () => {
  return (
    <main className="relative">
      <Navbar />
      <BrowserLibraryHero text={"Genre"} />
      <BrowseGenre />
      <Footer />
    </main>
  );
};

export default Genre;
