import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import TanstackProvider from "@/components/TanstackProvider";
import { dark } from '@clerk/themes';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SocailMediaApp | Authentication",
  description: "A Nextjs 13 Meta SocailMediaApp Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <TanstackProvider>
        <html lang="en">
          <body className={`${inter.className} bg-dark-1`}>
            <div className="w-full flex justify-center items-center min-h-screen">
              {children}
            </div>
          </body>
        </html>
      </TanstackProvider>
    </ClerkProvider>
  );
}
