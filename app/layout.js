import { Providers } from "./GlobalRedux/Provider";
import "./globals.css";
import { CartProvider } from './CartContext';
import Header from "./components/Header";
import MobileBar from "./components/MobileBar";

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
          <Header/>
        <main className="min-h-screen">{children}</main>
        {/* <div className="">
          <Footer />
          
        </div> */}
           <MobileBar />
          </CartProvider>
        </Providers>
       
      </body>
    </html>
  );
}
