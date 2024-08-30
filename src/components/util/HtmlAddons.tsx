"use client";

import { useRouter } from "next/router";
import { useEffect, } from "react";

const HtmlAddons = () => {

    useEffect(() => {
        // ***********************************
        const emptyComm = document.createComment("");
        const customComm = document.createComment("[");
        // ***********************************
        const header = document.getElementsByTagName("header")[0];
        header.prepend(emptyComm);
        header.append(customComm);

        document.querySelectorAll("header>div").forEach(div => {
            const headerChildComm = document.createComment("[");
            div.prepend(headerChildComm)
        })
        // ***********************************
        const root = document.getElementById("__next");
        root?.setAttribute("data-reactroot", "");
        // ***********************************
        const layout = document.getElementById("__layout__");
        // ***********************************
        document.querySelectorAll("div").forEach(div => {
            if(div.id === "__next") {
                div.prepend(emptyComm);
            }
            if(div.id === "__layout__") {
                div.prepend(emptyComm);
            }
        })
        
        // ***********************************
            document.addEventListener("wheel", (e) => {
                if (window.scrollY > 0) {
                    if(e.deltaY > 0) {
                        document.getElementById("global_header")?.classList.add("translate-y-[-100%]");
                        document.getElementById("global_header")?.classList.remove("translate-y-[0]");
                    }else {
                        document.getElementById("global_header")?.classList.remove("translate-y-[-100%]");
                        document.getElementById("global_header")?.classList.add("translate-y-[0]")
                    }
                }
            })
        // ***********************************
        const portalElement = document.getElementById("portal");
        portalElement?.setAttribute("data-reactportal", "");
    }, [])

  return null;
}

export default HtmlAddons
