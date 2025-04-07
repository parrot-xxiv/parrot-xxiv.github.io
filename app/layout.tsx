import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eldren Par | Web Developer',
  description: 'Eldren Par - A Web Developer crafting clean and functional websites. Learn more about my skills, experience, and projects here.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        {/* <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-VVMDWFE68K" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VVMDWFE68K');
          `}
        </Script> */}
      </head>
      <body className={`${inter.className} bg-slate-900`}>
        {children}
      </body>
    </html>
  );
}
