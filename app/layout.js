import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/header";
import { ThemeProvider } from "../components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"]});
export const metadata = {
  title: "Zappy AI_CARRER_COACH",
  description: "",
};

export default function RootLayout({ children }) {
  return (
<ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >


    <html lang="en" suppressHydrationWarning>

    <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >


            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>

            
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200 ">
                <p>made with love by mituu 💗</p>
              </div>
            </footer>
           
          </ThemeProvider>
      </body>
    </html>
      </ClerkProvider>
  );
}