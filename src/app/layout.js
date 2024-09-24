import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estate",
  description: "Real estate website to search your dream homes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
