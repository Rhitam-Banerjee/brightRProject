import { CollectionsBook, Footer, Hero, Navbar, Popular } from "../Containers";
const Home = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Popular />
      <CollectionsBook />
      <Footer />
    </main>
  );
};

export default Home;
