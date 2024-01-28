import {
  BestSellersPopular,
  GlobalBestSeller,
  TeachersPick,
} from "../Components";
import { Footer, Hero, Navbar, Popular } from "../Containers";
const Home = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Popular />
      <BestSellersPopular />
      <GlobalBestSeller />
      <TeachersPick />
      <Footer />
    </main>
  );
};

export default Home;
