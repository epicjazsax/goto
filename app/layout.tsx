import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Logo_Dark from "@/assets/logo_main_dark.png";
import Logo from "@/assets/logo_main.png";
import { ThemeProvider } from "@/components/ThemeProvider"
import { ThemeSwitch } from "@/components/ThemeSwitch"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Go-To",
    description: "View and manage a database of internet shortcuts",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const { theme, resolvedTheme } = useTheme()

    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {/***********************************************************************
                The following is how to selectively show a dark or light version
                of an asset.  Dark uses CSS class "dark:block hidden" and the
                light version uses CSS class "block dark:hidden".
                Include both
              ***********************************************************************/}
                        <div className="flex flex-row w-full px-4 items-center justify-between">
                            <Link href="/" className="flex-shrink-0">
                                <Image
                                    className="dark:block hidden"
                                    src={Logo_Dark}
                                    alt="logo"
                                    width={250}
                                    height={64}
                                />
                                <Image
                                    className="block dark:hidden"
                                    src={Logo}
                                    alt="logo"
                                    width={250}
                                    height={64}
                                />
                            </Link>

                            <h1 className="leading-none text-xl font-semibold text-black dark:text-zinc-50 text-center flex-1">
                                Go-To
                            </h1>

                            <div className="flex-shrink-0">
                                <ThemeSwitch />
                            </div>
                        </div>
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
