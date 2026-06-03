import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hilton Plastic — Agricultural & Industrial Plastic Fittings Since 1994",
  description: "Ahmedabad's trusted manufacturer of 391+ ISO-certified plastic components — from field irrigation valves to heavy-duty industrial pipeline systems. PP, CPVC & UPVC grade materials, precision-moulded.",
  keywords: "Hilton Plastic, Hilton Valves, Piping Fittings, Agri Irrigation, Ahmedabad, Plastic Fittings, Foot Valves, Bharatbhai, Vishnubhai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased bg-surface text-on-surface`}
      >
        {children}
      </body>
    </html>
  );
}
