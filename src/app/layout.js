// app/layout.js
import './globals.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

export const metadata = {
  title: "Car Marketplace",
  description: "Next.js Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
