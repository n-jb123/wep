import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Terracotta & Pine Expedition",
};
const Bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const Sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${Bricolage} ${Sans}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
