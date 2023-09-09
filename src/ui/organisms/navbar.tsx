import { CustomFC, cn } from "@bacaxnot/utils";
import { NavbarLink, NavbarLogo } from "../atoms";
import { FEATURES, ROUTES } from "@/config";

const links = [
  { href: ROUTES.blog.root, text: "blog", flag: FEATURES.blog },
  { href: ROUTES.thoughts.root, text: "thoughts", flag: FEATURES.thoughts },
  { href: ROUTES.quien.root, text: "quién", flag: FEATURES.quien },
];

const Navbar: CustomFC<"header"> = ({ className, ...props }) => {
  const classes = cn("navbar sticky grid", className);

  return (
    <header className={classes} {...props}>
      <nav className="flex items-end justify-between">
        <NavbarLogo />
        <NavbarLinkList />
      </nav>
    </header>
  );
};

function NavbarLinkList() {
  const validLinks = links.filter((feature) => feature.flag);
  return (
    <ul className="flex items-end gap-2">
      {validLinks.map((link) => (
        <NavbarLink key={link.href} href={link.href}>
          {link.text}
        </NavbarLink>
      ))}
    </ul>
  );
}

export default Navbar;
