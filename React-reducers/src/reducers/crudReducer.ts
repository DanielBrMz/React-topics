import { TYPES } from "../actions/crudActions";
import { ICrudAction, ICrudState, SoccerPlayers } from "../ts/interfaces/global_interfaces";

export const crudInitialState: ICrudState = {
    db: null
};

export const crudReducer = (state: ICrudState = crudInitialState, action: ICrudAction): ICrudState => {
    switch (action.type) {
        case TYPES.CREATE_DATA:{
            return {
                ...state,
                db: [...state.db!, action.payloadMutation!]
            }
        }
        case TYPES.READ_ALL_DATA:{
            return {
                ...state,
                db: action.payloadQuery!.map((item: SoccerPlayers) => item)
            }
        }
        case TYPES.READ_ONE_DATA:{
            return {
                ...state
            }
        }
        case TYPES.UPDATE_DATA:{
            let newData: SoccerPlayers[] = state.db!.map((el: SoccerPlayers) => el.id === action.payloadMutation!.id ? action.payloadMutation! : el);
            return {
                ...state,
                db: newData
            };
        }
        case TYPES.DELETE_DATA:{
            let newData: SoccerPlayers[] = state.db!.filter((el: SoccerPlayers) => el.id !== action.payloadMutation!.id);
            return {
                ...state,
                db: newData
            }
        }
        case TYPES.NO_DATA:
            return state;
        default:
            return state;
    }
};