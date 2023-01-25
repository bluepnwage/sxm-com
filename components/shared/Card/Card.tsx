import type { ComponentPropsWithoutRef, ElementType } from "react";

type PropTypes<T extends ElementType> = ComponentPropsWithoutRef<T> & { component?: T };

export function Card<T extends ElementType = "div">({ children, component, ...props }: PropTypes<T>) {
  const Component = component || "div";
  return <Component {...props}>{children}</Component>;
}
