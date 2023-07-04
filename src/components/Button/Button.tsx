import React from "react";

export const Button = (
  props: Record<string, string | number | React.ReactElement>
) => {
  return <button>{props.children}</button>;
};
