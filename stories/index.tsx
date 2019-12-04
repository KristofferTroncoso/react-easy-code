import React from 'react';
import { storiesOf } from '@storybook/react';
import Code, { InlineCode, BlockCode } from '../src';

storiesOf('Code', module)
  .add('simple render', () => <Code render={`let i = 3;`} />)
  .add('inline render', () => <Code render={`let i = 3;`} inline />)
  .add('dark inline render', () => <Code render={`let i = 3;`} theme="dark" inline />)
  .add('explicit jsx code', () => (
    <Code 
      lang="jsx"
      render={`
        function Card() {
          return (
            <div className="Card">
              <h1 style={{color: 'steelblue'}}>This is a Card</h1>
              <button onClick={e => console.log("hello")}>Say Hello</button>
            </div>
          )
        }
      `}
    />
  ))
  .add('dark explicit jsx code', () => (
    <Code 
      lang="jsx"
      theme="dark"
      render={`
        function Card() {
          return (
            <div className="Card">
              <h1 style={{color: 'steelblue'}}>This is a Card</h1>
              <button onClick={e => console.log("hello")}>Say Hello</button>
            </div>
          )
        }
      `}
    />
  ))


storiesOf('InlineCode', module)
  .add('inline render', () => <InlineCode render={`let i = 3;`} />)
  .add('dark inline render', () => <InlineCode render={`let i = 3;`} theme="dark" />)

storiesOf('BlockCode', module)
  .add('explicit jsx code', () => (
    <BlockCode 
      lang="jsx"
      render={`
        function Card() {
          return (
            <div className="Card">
              <h1>This is a Card</h1>
            </div>
          )
        }
      `}
    />
  ))
  .add('dark explicit jsx code', () => (
    <BlockCode 
      lang="jsx"
      theme="dark"
      render={`
        function Card() {
          return (
            <div className="Card">
              <h1>This is a Card</h1>
            </div>
          )
        }
      `}
    />
  ))