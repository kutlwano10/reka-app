import { Providers } from "./GlobalRedux/Provider";
import "./globals.css";
import { CartProvider } from './CartContext';
import Header from "./components/Header";

// import Footer from "./components/Footer";

export const metadata = {
  title: "Reka online market",
  description: "Fresh food delivered to Your Door step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <CartProvider>
            <Header className="fixed top-0 w-full z-10" /> {/* Fixed header */}
            <main className="pt-">  {children} </main>
         </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
