import { Inter } from 'next/font/google'
import './globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from '@/components/Navbar';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proyecto Final',
  description: 'Plataforma de preparacion para el examen de ingreso a la Uni',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='container  mx-auto px-5 py-3'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
