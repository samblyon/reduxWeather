require('babel-register')
import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import App from './src/containers/app'
import Reducer from './src/reducers/index';


const app = Express()
const port = process.env.PORT || 3000

app.use(Express.static(path.join(__dirname, 'public')))
app.use(handleRender)

function handleRender(req, res){
  // Create a new Redux store instance
  const store = createStore(Reducer)

  // Render component to string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState){
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Universal Redux Weather</title>
        <link rel="stylesheet" href="/style/reset.css" media="screen" title="no title" charset="utf-8">
        <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
        <link rel="stylesheet" href="/style/weather.css" media="screen" title="no title" charset="utf-8">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCM3aIEzrLBvXbRF2D1-rYvFA7dMiYsWfM"></script>
      </head>
      <body>
        <div id="main">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port)
console.info('==> Server is listening in '  + process.env.NODE_ENV + ' mode')
console.info('==> Go to http://localhost:%s', port)
