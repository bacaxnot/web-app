import { AllHTMLProps, cn } from "@bacaxnot/utils";
import Link from "next/link";

interface Props extends AllHTMLProps<"a"> {
  href: string;
}

const NavbarLink = ({ children, ...props }: Props) => {
  const styles = cn(
    "border border-transparent px-1.5 py-0.5 hover:cursor-pointer @md/navbar:hover:border-white",
    props.className,
  );
  return (
    <Link {...props} className={styles}>
      {children}
    </Link>
  );
};

export default NavbarLink;
