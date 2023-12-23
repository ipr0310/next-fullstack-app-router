import '@/styles/global.css';
import { inter } from '@/styles/fonts';

export const runtime = 'edge';
export const preferredRegion = ['iad1'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
