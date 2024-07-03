import ScrollToTop from "@/components/ui/Button/ScrollIcon";
import CustomCursor from "@/components/ui/Cursor/CustomCursor";
import ClientLoader from "@/components/ui/Loading/ClientLoading";
import Providers from "@/lib/Providers/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Jubair - Official Site",
  description: "Mohammad Jubair official site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.svg" type="image/jpeg" />
        </head>
        <body>
          <CustomCursor />
          <ClientLoader>{children}</ClientLoader>
          <ScrollToTop />
        </body>
      </html>
    </Providers>
  );
}
