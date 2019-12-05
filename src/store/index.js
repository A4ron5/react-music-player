import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

import { buttons } from '../features/buttons'
import { progressbar } from '../features/progressbar';

const rootReducer = combineReducers({ buttons, progressbar })

export default function configureStore() {
 

  const store = createStore(rootReducer, applyMiddleware(logger))

  return store
}