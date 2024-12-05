"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "@/app/ui/globals.css";
import theme from "./theme";
import { lato } from "@/app/ui/fonts";
import Head from "next/head";
import { metadata } from "./lib/meta";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" sizes="any" />

      </Head>
      <body className={`${lato.className} antialiased`}>
        <AppRouterCacheProvider
        //  options={{ key: 'css' }}
        // options={{ enableCssLayer: true }}
        >
            <ThemeProvider theme={theme}> {children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
