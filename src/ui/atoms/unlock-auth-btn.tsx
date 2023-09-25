"use client";

import { useAdminAuth } from "@/hooks";
import { AllHTMLProps, cn } from "@bacaxnot/utils";

type Props = AllHTMLProps<"button">;

const UnlockAuthBtn = ({ ...props }: Props) => {
  const { authorize } = useAdminAuth();

  const classes = cn(
    "border border-transparent py-2 hover:border-white",
    props.className,
  );

  return (
    <button className={classes} {...props} type="button" onClick={authorize}>
      unlock [?]
    </button>
  );
};

export default UnlockAuthBtn;
