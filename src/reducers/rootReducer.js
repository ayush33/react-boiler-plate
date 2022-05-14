//* *********************************************************************
//    Purpose: <root reducer from where all the reducers are called>
//   SN  Date       Change Description      Modified By

//* *********************************************************************

import { combineReducers } from 'redux'
import getData from './getData'
const appReducer = combineReducers({
    getData
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer
