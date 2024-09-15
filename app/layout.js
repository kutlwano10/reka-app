import "./globals.css";

// import Footer from "./components/Footer";

export const metadata = {
  title: "Reka online market",
  description: "Fresh food delivered to Your Door step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <main className="">{children}</main>
        {/* <div className="">
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
