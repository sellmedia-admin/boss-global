import { Outfit } from "next/font/google";
import "./globals.css";
import "../components/Navigation/nav.css"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Boss Global | Home",
  description: "We put people at the forefront of our innovation and solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
