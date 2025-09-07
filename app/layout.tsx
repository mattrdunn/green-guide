import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/providers';
import Nav from './components/Nav';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Green Guide',
    description:
        'Unleash your inner botanist with Green Guide - your ultimate plant care companion.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <div className="min-h-screen pt-12 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20 relative">
                        <Nav />
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
