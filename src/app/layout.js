import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./auth/page";
import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Quick Ship",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <TanstackProvider>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
