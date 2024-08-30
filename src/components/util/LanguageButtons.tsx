import { Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LanguageButtons = () => {
  const tr = useTranslations("language-tooltips");
  const router = useRouter();

  return (
    <div
      className="w-full h-fit flex items-center justify-center flex-wrap gap-2"
      role="group"
    >
      <Tooltip
        content={tr("eng")}
        delay={0}
        closeDelay={0}
        className="tooltip__fill"
        placement="bottom"
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeIn",
              },
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <Link href="/" locale="en"  className={`language__item !relative before:content-[''] before:w-full before:h-1 before:bg-slate-400 dark:before:bg-slate-500 before:absolute before:-bottom-3 before:left-0 before:scale-0 before:duration-200 before:rounded-sm ${router.locale === "en" ? "!text-primary before:scale-100" : ""}`} >EN</Link>
      </Tooltip>
      <span className="size-1 bg-slate-400 dark:bg-slate-700 rounded-full" aria-hidden="true" role="separator"></span>
      <Tooltip
        content={tr("arm")}
        delay={0}
        closeDelay={0}
        className="tooltip__fill"
        placement="bottom"
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
              transition: {
                duration: 0.1,
                ease: "easeIn",
              },
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <Link href="/" locale="am"  className={`language__item !relative before:content-[''] before:w-full before:h-1 before:bg-slate-400 dark:before:bg-slate-500 before:absolute before:-bottom-3 before:left-0 before:scale-0 before:duration-200 before:rounded-sm ${router.locale === "am" ? "!text-primary before:scale-100" : ""}`} >AM</Link>
      </Tooltip>
    </div>
  );
};

export default LanguageButtons;
