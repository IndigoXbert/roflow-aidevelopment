import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RoFlow — AI-Driven Roblox Development",
  description: "Build Roblox games with AI-powered workflows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
