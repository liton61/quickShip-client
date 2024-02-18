
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import TanstackProvider from "./providers/TanstackProvider";
import { Inter } from "next/font/google";
import './globals.css';
import { useLocale } from "next-intl";
import { Providers } from "./providers/NextUIProviders";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Quick Ship",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();


  return (
    <html lang={locale} data-theme="light">
      <body className={inter.className}>
        <TanstackProvider>
          <AuthProvider>
            <Providers>
              {children}
            </Providers>
            <Toaster />
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
