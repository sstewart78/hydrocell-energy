import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HydroCell Energy Systems",
  description: "Power from Water.Energy for Life. " 
  + "HydroCell converts excess electricity and pure water into clean hydrogen energy storage. " 
  + "Zero emissions, infinite scalability, absolute reliability.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
