import { CustomFC, cn } from "@bacaxnot/utils";
import Link from "next/link";

interface Props {
  href: string;
}

const NavbarLink: CustomFC<"a", Props> = ({ children, ...props }) => {
  const styles = cn(
    "@md/navbar:hover:border-white border border-transparent px-1.5 py-0.5 hover:cursor-pointer",
    props.className,
  );
  return (
    <Link {...props} className={styles}>
      {children}
    </Link>
  );
};

export default NavbarLink;
