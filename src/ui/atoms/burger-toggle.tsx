import { CustomFC, cn } from "@bacaxnot/utils";

const burgerToggleStyles = {
  mobile: "cursor-pointer border border-transparent px-1  transition-transform",
  desktop: "@md/navbar:hidden",
};

interface Props {
  isOpen: boolean;
  className?: string;
}

const BurgerToggle: CustomFC<"div", Props> = ({
  isOpen,
  className,
  ...props
}: Props) => {
  const interactionStyles = {
    ["transition-transform"]: true,
    ["rotate-90"]: isOpen,
  };

  return (
    <div
      className={cn(
        burgerToggleStyles.mobile,
        burgerToggleStyles.desktop,
        className,
        interactionStyles,
      )}
      {...props}
    >
      ...
    </div>
  );
};

export default BurgerToggle;
