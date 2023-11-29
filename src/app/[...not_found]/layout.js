import { icons, description, title } from "@/utils/metaData";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  icons,
  title: title("Error 404"),
  description,
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <link
          precedence="default"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link>
        <body>
          {children} 
          <Analytics />
        </body>
      </html>
    </>
  );
}
