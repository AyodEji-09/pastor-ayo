import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";
import { icons } from "@/utils/favicon";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  icons,
  title: "Ayodeji Anifowose | Lead Pastor, RCCG, Arise Church.",
  description:
    "Ayodeji Anifowose is an author, content creator, training facilitator, certified Life/ Marriage coach and Pastor. He holds a bachelor's degree in Economics and is also a young minister of God, determined to continually groom world changers and teach people the undiluted word of God. As a content creator and marriage counselor, he runs a YouTube channel called Great Father, Great Husband.Though he has been in ministry for many years, he accepted God’s call as the Lead Pastor at RCCG, Arise Church, Riverside, California in 2022. As part of his calling, gifting and experience, he's using every opportunity given to open the eyes of the body of Christ. In this current digital age, one of his goals is to maximize social media to propagate the gospel of Jesus Christ. He has a special calling to groom boys into becoming the men God has called them to be. He loves people and is enthusiastic about making an impact in the lives of everyone he meets. Ayodeji Anifowose is also a songwriter and has released three songs as a blessing to the world. The songs are available on all digital platforms. He's blessed with a wonderful wife, Opeyemi and three lovely daughters Esther, Ayomide and Imole.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossOrigin="anonymous"
          />
        </body>
      </html>
    </>
  );
}
