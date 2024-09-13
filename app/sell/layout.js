import SellerLayout from "../components/SellerLayout";
// import sellerLayout from "./page";

export const metadata = {
  title: "Sell on Reka",
  description: "Be a verified seller on Reka",
};

export default function RootLayout({ children }) {
  return <SellerLayout>{children}</SellerLayout>;
}
