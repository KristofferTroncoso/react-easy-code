# React Easy Code

```npm install react-easy-code```

# To use

```js
import Code from 'react-easy-code';

function App() {
  return (
    <div className="App">
      <h1>Code highlighting is easy!</h1>
      <Code
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
    </div>
  )
}
```

# Features
* batteries-included code highlighting
  * styles
  * tab autoformatting
  * light and dark theme
  * block and inline code
  * jsx, javascript, and css syntax highlighting

# Params
* lang: 'jsx' | 'javascript' | 'css'