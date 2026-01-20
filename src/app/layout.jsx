import './globals.css'
import JssProvider from '../styles/JssProvider'

export const metadata = {
  title: 'Understanding Tubulinopathy | Tubulinopathy Awareness',
  description: 'Comprehensive educational resource about tubulinopathies - rare genetic disorders affecting microtubule formation and brain development. Learn about causes, variants, diagnosis, and current research.',
  keywords: 'tubulinopathy, tubulinopathies, TUBA1A, TUBB2B, TUBB3, rare genetic disorders, brain development, microtubules, genetic variants, neurological disorders',
  authors: [{ name: 'Tubulinopathy Awareness' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.tubulinopathy.com/',
    title: 'Understanding Tubulinopathy | Tubulinopathy Awareness',
    description: 'Comprehensive educational resource about tubulinopathies - rare genetic disorders affecting microtubule formation and brain development.',
    siteName: 'Tubulinopathy Awareness',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://www.tubulinopathy.com/',
    title: 'Understanding Tubulinopathy | Tubulinopathy Awareness',
    description: 'Comprehensive educational resource about tubulinopathies - rare genetic disorders affecting microtubule formation and brain development.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-47PV0MGFJF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-47PV0MGFJF');
            `,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1038698166930039"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <JssProvider>{children}</JssProvider>
      </body>
    </html>
  )
}
