import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import { icons, description, title } from "@/utils/metaData";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  icons,
  title: title("Ayodeji Anifowose"),
  description,
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
          <Analytics />
          <Script
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            crossOrigin="anonymous"
          />
        </body>
      </html>
    </>
  );
}
