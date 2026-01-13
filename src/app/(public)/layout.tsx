import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
// import AdPlaceholder from "../components/AdPlaceholder";
import BundlesCarousel from "../components/BundlesCarousel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      {/* Top banner ad for public pages */}
      {/*<div style={{ padding: "12px 0", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <AdPlaceholder variant="banner" className="mx-auto">
          <BundlesCarousel />
          </AdPlaceholder>
        </div>
      </div>*/}
      {children}
      <Footer />
    </div>
  );
}
