import MainLayout from "./_layout/MainLayout";
import { ThemeProvider } from "./_store/themeContext";
import "./_styles/globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Country App",
  description: "in-House Code Challenge",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className}`}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
