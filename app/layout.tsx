import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import ReduxProvider from "@/redux/ReduxProvider";
import { Providers } from "@/lib/providers";
import { Toaster } from "@/components/ui/sonner"
import dotenv from 'dotenv';

dotenv.config();
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Water vending system",
  description: "Water vending system",
};

export const roboto = Roboto({
  subsets: ['latin'], // Adjust subsets based on your language needs
  weight: ['300', '400', '500', '700'], // Specify font weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.className} max-w-screen-xl mx-auto`}>
          <ReduxProvider>
              <Providers>
                {children}
              </Providers>
          </ReduxProvider>
          <Toaster />
 
        </body>
      </html>
    </ClerkProvider>
    
  );
}
