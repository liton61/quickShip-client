import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/app/providers/TanstackProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/app/providers/AuthProvider";
import Provider from "./providers/NextUIProvider";

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
            <Provider>
              {children}
            </Provider>
            <Toaster />
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
