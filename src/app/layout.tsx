import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PixelBlastWrapper from "@/components/PixelBlastWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuhao Cheng - Portfolio",
  description: "Master's student in Computer Science at UIUC, specializing in Full Stack Development, Machine Learning, and NLP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Full-screen PixelBlast Background */}
          <div className="fixed inset-0 w-full h-full z-0">
            <PixelBlastWrapper
              variant="square"
              pixelSize={6}
              color="#8B5CF6"
              patternScale={2}
              patternDensity={1.8}
              pixelSizeJitter={0.3}
              enableRipples={true}
              rippleSpeed={0.5}
              rippleThickness={0.15}
              rippleIntensityScale={2.0}
              liquid={false}
              liquidStrength={0.1}
              liquidRadius={1.0}
              liquidWobbleSpeed={4}
              speed={0.8}
              edgeFade={0.05}
              transparent={true}
              className="w-full h-full"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          
          {/* Content layer */}
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
