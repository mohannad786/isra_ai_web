import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
    title: 'ISRA AI - AI You Can Trust. Results You Can Measure.',
    description:
        'Enterprise-grade AI capabilities designed for scale, compliance, and measurable impact. We build AI systems you can trust with results you can measure.',
    keywords:
        'AI, Artificial Intelligence, Enterprise AI, Machine Learning, Predictive Analytics, GenAI, RAG, Healthcare AI, Oil & Gas AI',
    icons: {
        icon: '/ISRA_AI_copy.png',
        shortcut: '/ISRA_AI_copy.png',
        apple: '/ISRA_AI_copy.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
