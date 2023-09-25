import { ASCII_LOCK_BIN } from "@/lib/ascii-art";
import { AllHTMLProps, cn } from "@bacaxnot/utils";

const Designs = {
  lock: ASCII_LOCK_BIN,
};
interface Props extends AllHTMLProps<"section"> {
  design: keyof typeof Designs;
}

const AciiArt = ({ design, ...props }: Props) => {
  const artDesign = Designs[design].map((line, index) => {
    return <pre key={index}>{line}</pre>;
  });

  const classes = cn("grid justify-center", props.className);

  return (
    <section {...props} className={classes}>
      {artDesign}
    </section>
  );
};

export default AciiArt;
