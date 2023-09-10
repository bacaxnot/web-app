import { ASCII_LOCK } from "@/lib/ascii-art";
import { CustomFC, cn } from "@bacaxnot/utils";

const Designs = {
  lock: ASCII_LOCK,
};
interface Props {
  design: keyof typeof Designs;
}

const AciiArt: CustomFC<"section", Props> = ({ design, ...props }) => {
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
