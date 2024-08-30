import { MainLayout } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hagop Hovaguimian</title>
      </Head>
      <NextIntlClientProvider
        locale={router.locale}
        messages={pageProps.messages}
      >
        <ThemeProvider
          attribute="class"
          enableColorScheme
          enableSystem
          storageKey="theme"
        >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </NextIntlClientProvider>
    </>
  );
}
