import type { Metadata } from 'next';
import { Fraunces, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import SideNav from './components/SideNav';
import Providers from './providers';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const fraunces = Fraunces({
    variable: '--font-fraunces',
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
                className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
            >
                <Providers>
                    <div className="flex min-h-screen font-(family-name:--font-geist-sans)">
                        <Nav />
                        <SideNav />
                        <main className="relative min-w-0 flex-1 pt-12 pb-20 sm:p-20">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
