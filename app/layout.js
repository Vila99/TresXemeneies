import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'Tres Xemeneies · Consorci del Besòs',
  description: 'Un segle de producció elèctrica i mobilització veïnal a la desembocadura del Besòs. Microsite del Consorci del Besòs.',
}

export const viewport = {
  themeColor: '#19323e',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <body className={lato.className}>{children}</body>
    </html>
  )
}