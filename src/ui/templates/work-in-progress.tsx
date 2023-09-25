import { AllHTMLProps, cn } from "@bacaxnot/utils";
import React from "react";

type Props = AllHTMLProps<"p">;

const WorkInProgress = ({ className, ...props }: Props) => {
  const classes = cn(
    "flex flex-col items-center justify-center break-words text-6xl",
    className,
  );
  return (
    <p {...props} className={classes}>
      <span>work in</span>
      <span className="with-caret blinking">progress</span>
    </p>
  );
};

export default WorkInProgress;
