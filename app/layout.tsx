import type { Metadata } from 'next';
import { Inter, Dosis, Inconsolata } from 'next/font/google';
import './globals.css';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
