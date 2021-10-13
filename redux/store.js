import { createStore,applyMiddleware} from "redux";
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
 import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from './index';


const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    } else {
        return reducers(state, action)
    }
}

const store = () => createStore(
    reducer,composeWithDevTools(applyMiddleware(thunk)) 
);

export const wrapper = createWrapper(store, { debug: true });
