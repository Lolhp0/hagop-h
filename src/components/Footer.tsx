import React from "react";
import Paragraph from "./util/Paragraph";
import { PhoneNumbers, SocialLinks } from "@/constants";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const tr = useTranslations("footer");

  return (
    <footer className="w-full h-fit mt-20 py-5 inner__padding border-t-2 border-slate-200 dark:border-slate-700/50">
      <div className="w-full h-fit flex gap-2 flex-wrap">
        {/* */}
        <div className="footer__column">
          <h1 className="footer__column-title">{tr("contact-col-title")}</h1>
          {PhoneNumbers.map((number) => (
            <div
              className="flex gap-2 items-center justify-start my-3"
              key={number.title}
            >
              <Tooltip
                content={`${number.title} `}
                delay={0}
                closeDelay={0}
                className="tooltip__fill"
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
                <Image src={`/icons/${number.img}`} width={20} height={20} priority alt={number.title}/>
              </Tooltip>
              <span className="text-sm">{number.number}</span>
            </div>
          ))}
        </div>
        {/* */}
        <div className="footer__column">
          <h1 className="footer__column-title">{tr("social-col-title")}</h1>
          {SocialLinks.map((social) => (
            <div
              className="flex gap-2 items-center justify-start my-3"
              key={social.title}
            >
              <Tooltip
                content={`${social.title} `}
                delay={0}
                closeDelay={0}
                className="tooltip__fill"
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
                <Image src={`/icons/${social.img}`} width={20} height={20} priority alt={social.title}/>
              </Tooltip>
              <Link href={social.url} className="text-sm underline hover:decoration-transparent">{social.title}</Link>
            </div>
          ))}
        </div>
        {/* */}
      </div>
    </footer>
  );
};

export default Footer;
