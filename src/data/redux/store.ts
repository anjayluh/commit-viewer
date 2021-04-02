import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import commit from "./commit/reducer";

const myWindow = window as any;
const toolsName = "__REDUX_DEVTOOLS_EXTENSION__";
const devTools: any = myWindow[toolsName]
  ? myWindow[toolsName]()
  : (f: any) => f;
const reducers = combineReducers({
  commit
});
const middleware = applyMiddleware(createLogger(), ReduxThunk);
const store: any = middleware(devTools(createStore))(reducers);
export default store;
