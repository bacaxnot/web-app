import React from "react";

const FormattedText = ({ children }: { children: string }) => {
  return <pre className="whitespace-pre-wrap break-all">{children}</pre>;
};

export default FormattedText;
