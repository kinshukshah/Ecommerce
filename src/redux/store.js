import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import rootreducer from "./root-reducer";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootreducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
