import { Sometype_Mono } from "next/font/google";
import "./globals.css";
//components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Odrey | Portfolio",
  description: "Portfolio personnel de Odrey, développeur web et designer digital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (!window.ethereum) {
                    window.ethereum = {};
                  }
                  if (!Object.getOwnPropertyDescriptor(window.ethereum, 'selectedAddress')) {
                    Object.defineProperty(window.ethereum, 'selectedAddress', {
                      value: undefined,
                      writable: true,
                      configurable: true,
                    });
                  }
                } catch (error) {
                  console.warn('Ethereum guard skipped:', error);
                }
              })();
            `,
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${sometypeMono.variable} antialiased overflow-x-hidden bg-primary text-white leading-relaxed relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex min-h-screen w-full">
            {/*main nav*/}
            <div className="hidden 2xl:flex w-[285px] shrink-0 h-screen bg-secondary sticky top-0">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-4 sm:px-6 mx-auto">
              <Header />
              <main className="pt-24 2xl:pt-0">{children}</main>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
