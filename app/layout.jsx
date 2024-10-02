import { Providers } from "./GlobalRedux/Provider";
import "./globals.css";
import { CartProvider } from "./CartContext";
import Header from "./components/Header";
import MobileBar from "./components/MobileBar";

export const metadata = {
  title: 'Reka Store',
  description: 'A marketplace for farmers to sell products online',
  icons: {
    icon: '/favicon.ico', // Replace with your actual favicon
  },
  manifest: '/manifest.json', // This points to your PWA manifest file
   // Sets the theme color for PWA
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Providers>
          <CartProvider>
            <Header className="fixed top-0 w-full z-10" /> {/* Fixed header */}
            <main className="min-h-screen"> {children} </main>
            <MobileBar/> {/* Mobile menu */}
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
