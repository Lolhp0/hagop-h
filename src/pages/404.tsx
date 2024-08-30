// pages/404.tsx

import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";

export async function getStaticProps(context: any) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@/messages/${context.locale}.json`)).default
    }
  };
}

const Custom404: NextPage = () => {
  const tr = useTranslations("error-pages.404");

  return (
    <section>
      <div className="w-full min-h-screen flex items-center justify-center flex-col gap-3">
        <h1 className="heading__title">{tr("mainTitle")}</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <span className="text-primary underline underline-offset-2">
            {tr("goback")}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Custom404;
