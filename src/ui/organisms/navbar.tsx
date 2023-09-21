import { CustomFC, cn } from "@bacaxnot/utils";
import { NavbarLogo } from "../atoms";
import { NavbarLinks } from "../molecules";

const Navbar: CustomFC<"header"> = ({ className, ...props }) => {
  const classes = cn(
    "navbar sticky top-0 z-50 grid bg-black bg-clip-border py-2 @container/navbar",
    className,
  );

  return (
    <header className={classes} {...props}>
      <nav className="flex items-end justify-between bg-inherit">
        <NavbarLogo />
        <section>
          <NavbarLinks />
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
