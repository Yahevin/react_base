import InferReducerType from "@/types/InferReducerType";
import {combineReducers} from "redux";
import Reducer from "@/store/test/reducer";


const reducers = {
    Reducer,
};

const reducer = combineReducers(reducers);

type TStore = InferReducerType<typeof reducers>

export {reducer, TStore};
