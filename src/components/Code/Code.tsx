import React from "react";
import { InlineCode } from "./InlineCode";
import { BlockCode } from "./BlockCode";
import PropTypes from 'prop-types';

export interface CodeProps {
  render: string
  lang?: "jsx" | "css" | "javascript"
  inline?: boolean
  theme?: "light" | "dark"
}

const propTypes: object = {
  render: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(["jsx", "css", "javascript"]),
  inline: PropTypes.bool,
  theme: PropTypes.oneOf(["light", "dark"])
};

/**
 * @param {string} render string of code to render
 * @param {string} lang "jsx" | "css" | "javascript" - Default "jsx"
 * @param {boolean} inline boolean - Default false
 * @param {string} theme "light" | "dark" - Default "light"
 */
export const Code: React.FC<CodeProps> = (props) => {
  const { render, lang="jsx", inline=false, theme="light" } = props;
  return (
    inline
    ? <InlineCode lang={lang} render={render} theme={theme} />
    : <BlockCode lang={lang} render={render} theme={theme} />
  );
}

Code.propTypes = propTypes;
