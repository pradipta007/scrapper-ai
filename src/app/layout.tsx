import { Inter } from "next/font/google";  // Change to Inter font
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});



export const metadata = {
  title: "Scrapper AI",
  description: "Scrap and analyze social media content with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

