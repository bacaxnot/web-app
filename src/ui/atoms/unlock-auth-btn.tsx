"use client";

import { useAdminAuth } from "@/hooks";
import { CustomFC, cn } from "@bacaxnot/utils";

const UnlockAuthBtn: CustomFC<"button"> = ({ ...props }) => {
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
