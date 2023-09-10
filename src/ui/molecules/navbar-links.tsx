"use client";

import { FEATURES, ROUTES } from "@/config";
import { CustomFC, cn } from "@bacaxnot/utils";
import { NavbarLink, BurgerToggle } from "../atoms";
import { useState } from "react";

const links = [
  { href: ROUTES.blog.root, text: "blog", flag: FEATURES.blog },
  { href: ROUTES.thoughts.root, text: "thoughts", flag: FEATURES.thoughts },
  { href: ROUTES.quien.root, text: "quién", flag: FEATURES.quien },
];

const NavbarLinkList: CustomFC<"ul"> = ({ children, ...props }) => {
  const validLinks = links.filter((feature) => feature.flag);
  return (
    <ul {...props}>
      {validLinks.map((link) => (
        <NavbarLink key={link.href} href={link.href}>
          {link.text}
        </NavbarLink>
      ))}
    </ul>
  );
};

const NavbarLinks = () => {
  const linkListStyles = {
    mobile:
      "absolute left-0 right-0 flex justify-end bg-black py-3 gap-1.5 transition-transform -translate-y-full -z-10 @md:hidden px-page",
    desktop: "hidden @md:flex gap-2",
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <BurgerToggle
        isOpen={isOpen}
        className="@md/navbar:hidden"
        onClick={toggle}
      />
      <NavbarLinkList className={linkListStyles.desktop} />
      <NavbarLinkList
        className={cn(linkListStyles.mobile, {
          "shadow-bottom translate-y-0 shadow-white": isOpen,
        })}
      />
    </>
  );
};

export default NavbarLinks;
