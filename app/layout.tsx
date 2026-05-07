import type { Metadata } from "next";
import "./index.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "AirPods Pro 3",
  description: "A stunning showcase of the new AirPods Pro 3 with interactive animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <NavBar />
          <main className="relative overflow-hidden">
            {children}
          </main>
      </body>
    </html>
  );
}
