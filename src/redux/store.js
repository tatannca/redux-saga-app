import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
);

export const store = createStore(
    allReducer,
    composedEnhancer,
);

sagaMiddleware.run(rootSaga);
