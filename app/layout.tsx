import type { Metadata } from "next";
import "./globals.css";
import Preloader from "./Preloader";

export const metadata: Metadata = {
  title: "VizagPlots | Plots, Construction & Dream Homes",
  description:
    "Find residential plots and build your dream home with VizagPlots.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}