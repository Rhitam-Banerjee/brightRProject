import { MustReadBooks } from "../Components";
import { Navbar, Footer, BrowserLibraryHero } from "../Containers";

const MustRead = () => {
  return (
    <main className="relative">
      <Navbar />
      <BrowserLibraryHero text={"Must Read"} />
      <MustReadBooks />
      <Footer />
    </main>
  );
};

export default MustRead;
