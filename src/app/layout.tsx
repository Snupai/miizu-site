import "@/styles/globals.css";
import { type Metadata } from "next";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Hey Miizu! | Portfolio",
  description: "Miizu's Portfolio",
  icons: [{ rel: "icon", url: "/sentimental.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
