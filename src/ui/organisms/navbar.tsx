import { CustomFC } from "@/lib/types";
import { cn } from "@/lib/utils";
import { NavbarLink, NavbarLogo } from "../atoms";

const Navbar: CustomFC<"header"> = ({ className, ...props }) => {
  const classes = cn("navbar sticky grid", className);

  return (
    <header className={classes} {...props}>
      <nav className="flex items-end justify-between">
        <NavbarLogo />
        <ul className="flex items-end gap-2">
          <NavbarLink href="/blog">blog</NavbarLink>
          <NavbarLink href="/thoughts">thoughts</NavbarLink>
          <NavbarLink href="/quien">quién</NavbarLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
