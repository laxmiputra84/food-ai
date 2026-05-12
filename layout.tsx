import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "FoodAI | The Future of Flavor",
  description: "Experience hyper-personalized food recommendations powered by advanced neural architecture.",
};

import { CartProvider } from "../context/CartContext";
import { ToastProvider } from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen font-inter">
        <CartProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-grow relative">
              {children}
            </main>
            <Footer />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}