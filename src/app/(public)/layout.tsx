import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
