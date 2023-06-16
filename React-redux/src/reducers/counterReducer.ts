import { IReducer } from "../ts/interfaces/global_interfaces";

const initialState = 0;

const counterReducer = (state: number = initialState, action: IReducer) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT_5':
            return state + action.payload!;
        case 'DECREMENT_5':
            return state - action.payload!;
            case 'RESET':
                return 0;
        default:
            return state;
    }
}

export default counterReducer;