// src/app/layout.tsx
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Project X Construction",
  description: "Building the future, beam by beam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Site header */}
        <Navbar />

        {/* Main content */}
        <main className="pt-16">{children}</main>

        {/* Single footer for the whole site */}
        <Footer />
      </body>
    </html>
  );
}
