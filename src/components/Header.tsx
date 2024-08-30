import React from "react";
import ThemeButton from "./util/ThemeButton";
import Link from "next/link";
import LanguageButtons from "./util/LanguageButtons";
import MobileNav from "./MobileNav";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();

  return (
    <header className="w-full h-fit fixed top-0 left-0 right-0 z-50 border-b-2 py-3 inner__padding border-slate-300 dark:border-slate-800 bg-slate-200/50 dark:bg-slate-900/50 backdrop-blur-2xl duration-500" id="global_header">
      <div className="w-full h-fit flex items-center justify-between gap-3">
        <div className="max-md:hidden">
          <ThemeButton />
        </div>
        <Link
          href="/"
          className="text-3xl max-sm:text-2xl text-primary mx-auto max-md:mx-0"
        >
          {t("fullName")}
        </Link>
        <MobileNav/>
      </div>
      <div className="w-full h-fit flex items-center justify-center mt-5 max-md:hidden">
        <LanguageButtons />
      </div>
    </header>
  );
};

export default Header;
