import type { Metadata } from 'next';
import { Inter, Dosis, Inconsolata } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const dosis = Dosis({ subsets: ['latin'], variable: '--font-dosis' });
const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Whatsapp Status Generator',
  description: 'Whatsapp Status Generator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`w-full ${dosis.variable} ${inconsolata.variable}`}
    >
      <Script src='"https://www.googletagmanager.com/gtag/js?id=G-W5DVFW6FMZ"' />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W5DVFW6FMZ');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
