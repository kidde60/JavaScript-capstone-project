"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SearchProvider } from "./SearchContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <Navbar />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}

