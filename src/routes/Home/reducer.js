import reducer from '../../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  FIREDB: (s, a) => ({ ...s,
    database: a.payload.database
  }),
  SHOW: (s, a) => ({
    ...s,
    show: !s.show
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  database: {},
  show: false
}

export default reducer(initialState, ACTION_HANDLERS)
