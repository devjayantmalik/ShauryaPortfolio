"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../data/main";
import headerLogo from "~/pics/common/header-logo.png";
import Image from "next/image";

export const TopHeader: React.FC = () => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const ccc = document.querySelector<HTMLSpanElement>(
      ".iknow_tm_topbar .wrapper .menu .ccc"
    );
    const elements =
      document.querySelectorAll<HTMLAnchorElement>(
        ".iknow_tm_topbar .wrapper .menu a"
      ) || [];
    const element = document.querySelector<HTMLAnchorElement>(
      ".iknow_tm_topbar .wrapper .menu .active a"
    );

    elements.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        const e = el;
        currentLink(ccc, e);
      });
    });

    const menu: HTMLDivElement | null = document.querySelector(
      ".iknow_tm_topbar .wrapper .menu"
    );
    menu?.addEventListener("mouseleave", function () {
      currentLink(ccc, element);

      const siblings = document.querySelectorAll(
        ".iknow_tm_topbar .wrapper .menu li"
      );
      siblings.forEach(function (sibling) {
        sibling.classList.remove("mleave");
      });
    });

    currentLink(ccc, element);

    function currentLink(
      ccc: HTMLSpanElement | null,
      e: HTMLAnchorElement | null
    ) {
      if (!e) {
        return false;
      }
      const left = e.getBoundingClientRect().left;
      const width = e.offsetWidth;
      const menuLeft = document
        ?.querySelector<HTMLDivElement>(".iknow_tm_topbar .wrapper .menu")
        ?.getBoundingClientRect().left;

      (e as any | null)?.parentNode?.classList.remove("mleave");

      const siblings = document.querySelectorAll(
        ".iknow_tm_topbar .wrapper .menu li"
      );
      siblings.forEach(function (sibling) {
        sibling.classList.add("mleave");
      });

      if (!!ccc && menuLeft) {
        ccc.style.left = left - menuLeft + "px";
        ccc.style.width = width + "px";
      }
    }
  }, []);

  return (
    <div className="iknow_tm_topbar smaller" data-position="fixed">
      <div className="topbar_inner">
        <div className="logo">
          <a href="#">
            <Image src={headerLogo} alt="logo" />
          </a>
        </div>
        <div className="wrapper">
          <div
            className={clsx("menu transition_link", isOpened ? "opened" : "")}
          >
            <ul>
              {navLinks.map((menu) => (
                <li
                  className={pathname === menu.href ? "active" : ""}
                  key={menu.id}
                >
                  <Link href={menu.href}>{menu.title}</Link>
                </li>
              ))}
            </ul>
            <span className="ccc" />
          </div>
          <div className="trigger">
            <div
              className={`md:hidden hamburger hamburger--slider ${
                isOpened ? "is-active" : ""
              }`}
              onClick={() => setIsOpened(!isOpened)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
