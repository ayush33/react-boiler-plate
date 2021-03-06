//**********************************************************************
//    Purpose: <Redux store >
//   SN  Date       Change Description      Modified By

//**********************************************************************
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function reduxStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}
