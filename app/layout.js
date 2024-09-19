import "./globals.css";
import { CartProvider } from '../app/components/CartContext';
// import Footer from "./components/Footer";

export const metadata = {
  title: "Reka online market",
  description: "Fresh food delivered to Your Door step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
        <main className="">{children}</main>
        {/* <div className="">
          <Footer />
        </div> */}
        </CartProvider>
      </body>
    </html>
  );
}
