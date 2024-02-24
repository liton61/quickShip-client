// ./src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import TanstackProvider from '@/providers/TanstackProvider';
import { Toaster } from 'react-hot-toast';
import ChatBot from '@/components/chat/chat';
import AuthProvider from '@/providers/AuthProvider';
// import BottomtoTop from '@/components/bottomtotop/bottomtotop';



const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Quick Ship',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <TanstackProvider>
          <AuthProvider>
            {/* <BottomtoTop /> */}
            <ChatBot />
            {children}
            <Toaster />
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
