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
      <head>
        <Script src='"https://www.googletagmanager.com/gtag/js?id=G-W5DVFW6FMZ"' />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-W5DVFW6FMZ');
          `}
        </Script>
        <meta
          property="twitter:image"
          content="Twitter link preview image URL"
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:title"
          content="Whatsapp Status Generator"
        ></meta>
        <meta
          property="og:image"
          content="https://dynamic-og-image-generator.vercel.app/api/generate?title=Whatsapp+Status+Generator&author=&websiteUrl=https%3A%2F%2Fwhatsapp-status-generator.vercel.app%2F&avatar=&theme=default"
        ></meta>
        <meta
          name="twitter:image"
          content="https://dynamic-og-image-generator.vercel.app/api/generate?title=Whatsapp+Status+Generator&author=&websiteUrl=https%3A%2F%2Fwhatsapp-status-generator.vercel.app%2F&avatar=&theme=default"
        />
        <meta
          property="og:url"
          content="https://whatsapp-status-generator.vercel.app/"
        ></meta>
        <meta property="og:title" content="Whatsapp Status Generator"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
