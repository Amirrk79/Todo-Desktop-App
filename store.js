import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as actions from './actions/actions'

let store

const initialState = {
  name: '',
  tasks:[],
  tags:[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actions.ADDTASK: {
        let newState = {...state ,
        tasks: [...state.tasks , action.payload] ,
        tags: [...state.tags , action.payload.tag]
        }
          return newState
      }
      case actions.DELETETASK: {
          break
      }
      default: {
          return state
      }
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}