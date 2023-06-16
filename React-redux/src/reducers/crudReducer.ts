import { ICrudReducer, ICrudState, SoccerPlayers } from "../ts/interfaces/global_interfaces";
import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types";

export const crudInitialState: ICrudState = {
    db: null
};

const crudReducer = (state: ICrudState, action: ICrudReducer) => {
    switch (action.type) {
        case CREATE_DATA: {
            return {
                ...state,
                db: [...state.db!, action.payloadMutation!]
            }
        }
        case READ_ALL_DATA:{
            return {
                ...state,
                db: action.payloadQuery!.map((item: SoccerPlayers) => item)
            }
        }
        case UPDATE_DATA:{
            let newData: SoccerPlayers[] = state.db!.map((el: SoccerPlayers) => el.id === action.payloadMutation!.id ? action.payloadMutation! : el);
            return {
                ...state,
                db: newData
            };
        }
        case DELETE_DATA: {
            let newData: SoccerPlayers[] = state.db!.filter((el: SoccerPlayers) => el.id !== action.payloadMutation!.id);
            return {
                ...state,
                db: newData
            }
        }    
        case NO_DATA:
            return state;
        default:
            return state;
    }

}

export default crudReducer;