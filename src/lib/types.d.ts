import { FunctionComponent, ComponentPropsWithRef, ElementType } from "react";

type HTMLTag = ElementType<any>;

/**
 * A custom type that accepts a generic HTML tag as a prop. This is useful to infer the correct props for a given HTML tag.
 */
export type AllHTMLProps<T extends HTMLTag> = ComponentPropsWithRef<T>;

/**
 * A custom FunctionComponent that accepts a generic HTML tag as a prop. This is useful to infer the correct props for a given HTML tag.
 * @example
 * const MyComponent: CustomFC<"div"> = (props) => {
 *  return <div {...props} />;
 * };
 */
export type CustomFC<Tag extends HTMLTag, Props = object> = FunctionComponent<
  AllHTMLProps<Tag> & Props
>;
