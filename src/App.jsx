import "./styles/global.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import FreeGiftBar from "./components/FreeGiftBar/FreeGiftBar";
import Hero from "./sections/Hero/Hero";
import OfferBanner from "./sections/OfferBanner/OfferBanner";
import BestSellers from "./sections/BestSellers/BestSellers";
import ProductHighlight from "./sections/ProductHighlight/ProductHighlight";
import Declaration from "./sections/Declaration/Declaration";
import Community from "./sections/Community/Community";
import Footer from "./sections/Footer/Footer";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <FreeGiftBar />
      <main>
        <Hero />
        <OfferBanner />
        <BestSellers />
        <ProductHighlight />
        <Declaration />
        <Community />
      </main>
      <Footer />
    </CartProvider>
  );
}