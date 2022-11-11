import { legacy_createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";

import {reducer as SingleProduct} from "./SingleProduct/reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({SingleProduct});

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));