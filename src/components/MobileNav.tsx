import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import ThemeButton from "./util/ThemeButton";
import LanguageButtons from "./util/LanguageButtons";
import { createPortal } from "react-dom";

const MobileNav = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div className="">
      <Dropdown
        backdrop="opaque"
        classNames={{
          content: "bg-slate-200 dark:bg-slate-800",
          base: "md:hidden",
        }}
      >
        <DropdownTrigger>
          <Button className="button__fill !hidden max-md:!block">
            <LuMenu size={20} />
          </Button>
        </DropdownTrigger>
        {createPortal(
          <>
            <DropdownMenu>
              <DropdownItem className="!bg-transparent hover:!bg-transparent cursor-default">
                <ThemeButton containerStyles=" w-full" />
              </DropdownItem>
              <DropdownItem className="!bg-transparent hover:!bg-transparent cursor-default !flex !items-center !justify-center">
                <LanguageButtons />
              </DropdownItem>
            </DropdownMenu>
          </>,
          document.getElementById("portal")
        )}
      </Dropdown>
    </div>
  );
};

export default MobileNav;
