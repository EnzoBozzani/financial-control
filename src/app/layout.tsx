import { Header, Footer } from '@/components';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/styles.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Manage your maney',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
