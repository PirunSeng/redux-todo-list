// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { applyMiddleware, createStore, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import rootReducer from './reducers'
// import loggerMiddleware from './middleware/logger'
// import monitorReducerEnhancer from './enhancers/monitorReducer'
// import App from './App'

// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
// const composedEnhancer = compose(middlewareEnhancer, monitorReducerEnhancer)

// const store = createStore(rootReducer, undefined, composedEnhancer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'

const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()