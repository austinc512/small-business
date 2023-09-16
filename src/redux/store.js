import { legacy_createStore as createStore } from "redux";

import reducers from "./reducers";
import state from "./state";
// reducers first, state second

export default createStore(reducers, state);
