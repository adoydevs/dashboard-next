import "@/app/ui/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); // Removed the export

export const metadata = {
  title: "Your App",
  description: "A modern dashboard application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
