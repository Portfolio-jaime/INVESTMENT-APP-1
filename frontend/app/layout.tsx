import './globals.css'

export const metadata = {
  title: 'trii',
  description: 'Inversión simple para principiantes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-albert-sans">{children}</body>
    </html>
  )
}