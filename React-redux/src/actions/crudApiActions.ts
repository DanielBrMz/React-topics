import { ICrudReducer, SoccerPlayers } from "../ts/interfaces/global_interfaces";
import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../types";

export const createAction = (data: SoccerPlayers): ICrudReducer => ({type: CREATE_DATA, payloadMutation: data});

export const readAllAction = (data: SoccerPlayers[] | null): ICrudReducer => ({type: READ_ALL_DATA, payloadQuery: data});

export const updateAction = (data: SoccerPlayers): ICrudReducer => ({type: UPDATE_DATA, payloadMutation: data});

export const deleteAction = (id: number): ICrudReducer => ({type: DELETE_DATA, payload: id});

export const noDataAction = (): ICrudReducer => ({type: NO_DATA});



