import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head />
      <body className='bg-gray-400'>{children}</body>
    </html>
  );
}
