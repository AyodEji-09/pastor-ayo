import { Poppins } from "next/font/google";
import { icons, description, title } from "@/utils/metaData";
import "./page.css";
import LayoutHelper from "@/components/Admin/LayoutHelper";
// import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  icons,
  title: title("Admin - Home"),
  description,
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${poppins.className} dark`}>
          <LayoutHelper>{children}</LayoutHelper>
          {/* <Script
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            crossOrigin="anonymous"
          /> */}
        </body>
      </html>
    </>
  );
}
