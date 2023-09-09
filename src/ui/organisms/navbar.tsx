import { CustomFC, cn } from "@bacaxnot/utils";
import { NavbarLogo } from "../atoms";
import { NavbarLinks } from "../molecules";

const Navbar: CustomFC<"header"> = ({ className, ...props }) => {
  const classes = cn("navbar @container/navbar sticky grid", className);

  return (
    <header className={classes} {...props}>
      <nav className="flex items-end justify-between bg-black">
        <NavbarLogo />
        <section>
          <NavbarLinks />
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
