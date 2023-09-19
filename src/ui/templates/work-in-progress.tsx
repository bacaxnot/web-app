import { CustomFC, cn } from "@bacaxnot/utils";
import React from "react";

const WorkInProgress: CustomFC<"p"> = ({ className, ...props }) => {
  const classes = cn(
    "flex flex-col items-center justify-center break-words text-6xl",
    className,
  );
  return (
    <p {...props} className={classes}>
      <span>work in</span>
      <span className="blinking">progress</span>
    </p>
  );
};

export default WorkInProgress;
