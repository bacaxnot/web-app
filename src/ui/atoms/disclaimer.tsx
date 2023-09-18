const Disclaimer = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-[0.7rem]">
      <strong className="underline">disclaimer</strong> {" : " + children}{" "}
    </span>
  );
};

export default Disclaimer;
