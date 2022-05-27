import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";
export const ConfigureStore=()=>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, logger),
  
    );

    return store;
}