"use client";

import { Button, Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";
import { LuMonitor, LuMoonStar, LuSunDim } from "react-icons/lu";

const ThemeButton = ({containerStyles}: {containerStyles?: string|""}) => {
  const { theme, setTheme } = useTheme();
  const tr = useTranslations("theme");

    const handleTheme = (newTheme: "light"|"dark"|"system") => {
        setTheme(newTheme)
    }

  return (
    <>
      <Tooltip
        content={`${theme === "dark" ? tr("light") : tr("dark")}`}
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
        <Button className={`button__fill ${containerStyles}`} onClick={() => handleTheme(
            theme === "dark" ? "light" : 
            theme === "light" ? "dark" : "dark")} suppressHydrationWarning={true}>
          {theme === "dark" ? (
            <LuMoonStar size={20}/>
          ) : theme === "light" ? (
            <LuSunDim size={20}/>
          ) : (
            theme === "system" && <LuMonitor size={20}/>
          )}
        </Button>
      </Tooltip>
    </>
  );
};

export default ThemeButton;
