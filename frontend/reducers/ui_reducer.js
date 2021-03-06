import { combineReducers } from "redux";
import { merge } from "lodash";
import modal from "./modal_reducer";
import dropdown from "./dropdown_reducer";
import filters from "./filters_reducer";
import loading from "./loading_reducer";

const uiReducer = combineReducers({ modal, dropdown, filters, loading });

export default uiReducer;
