import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kitanoaji-mirai.vercel.app";
const storeName = "北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅";
const description =
  "札幌駅エリアの和食海鮮居酒屋、北の味 海来(mirai)｜和食海鮮居酒屋 札幌駅の店舗基本情報。住所、電話番号、営業時間、予約、アクセス、English Guideを掲載しています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${storeName}｜札幌駅の和食海鮮居酒屋`,
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${storeName}｜札幌駅の和食海鮮居酒屋`,
    description,
    url: siteUrl,
    siteName: storeName,
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `${storeName}｜札幌駅の和食海鮮居酒屋`,
    description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
