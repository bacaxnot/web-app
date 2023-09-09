import { CustomFC } from "@/lib/types";
import Link from "next/link";

interface Props {
  href?: string;
}

const NavbarLink: CustomFC<"li", Props> = ({ href, ...props }) => {
  return (
    <li {...props}>
      <Link
        href={href ?? "#"}
        className="border border-transparent px-1.5 py-0.5 hover:cursor-pointer hover:border-white"
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavbarLink;
