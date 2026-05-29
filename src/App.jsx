import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Hero from "./sections/Hero/Hero";
import OfferBanner from "./sections/OfferBanner/OfferBanner";
import BestSellers from "./sections/BestSellers/BestSellers";
import Ritual from "./sections/Ritual/Ritual";
import ProductHighlight from "./sections/ProductHighlight/ProductHighlight";
import Testimonials from "./sections/Testimonials/Testimonials";
import Community from "./sections/Community/Community";
import Footer from "./sections/Footer/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <Cart />
      <main>
        <Hero />
        <OfferBanner />
        <BestSellers />
        <ProductHighlight />
        <Ritual />
        <Testimonials />
        <Community />
      </main>
      <Footer />
    </CartProvider>
  );
}
