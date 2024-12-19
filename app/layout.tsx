import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import AuthProvider from "./auth/Provider";
import Script from "next/script";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <GoogleAnalyticsScript />
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={poppins.variable}
      >
        <AuthProvider>
          <Navbar />
          <main className="p-5">
            {/* <Suspense fallback={<p>Loading..</p>}>{children}</Suspense> */}
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
