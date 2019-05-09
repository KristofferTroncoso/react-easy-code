import React, { useEffect } from "react";
import Prism from 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/components/prism-jsx';
import styled from 'styled-components';

const StyledPre = styled.pre`
  color: ${props => props.theme === "light" ? 'black ': 'white'};
	background: ${props => props.theme === "light" ? '#f5f2f0': '#333'};
	text-shadow: ${props => props.theme === "light" ? '0 1px white': 'none'};
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 4;
  hyphens: none;
  padding: 1em;
  margin: .5em 0;
  overflow: auto;

  ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  @media print {
      text-shadow: none;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${props => props.theme === "light" ? '#905': '#c43181'};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, .5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${props => props.theme === "light" ? '#07a': '#00a0e5'};
  }

  .token.function,
  .token.class-name {
    color: #DD4A68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export interface BlockCodeProps {
  render: string
  lang?: "jsx" | "css" | "javascript"
  theme?: "light" | "dark"
}

export function BlockCode({lang = "jsx", render, theme="light" }: BlockCodeProps) {
  let strLang = `language-${lang}`;

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <StyledPre className={strLang} theme={theme}>
      <code>{render}</code>
    </StyledPre>
  );
}