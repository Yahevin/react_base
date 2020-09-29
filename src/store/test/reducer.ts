import State from "@/store/test/state";
import {ActionTypes} from "@/store/test/action";
import IState from "@/store/test/IState";


function reducer(state = State, action: ActionTypes) : IState {
    switch (action.type) {
        case '': {
            return {
                ...state,
                test: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default pageReducer;
