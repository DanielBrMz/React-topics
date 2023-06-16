export interface SoccerPlayers{
    id: number;
    name: string;
    position: string;
    team: string;
}

export interface IShoppingAction {
    type?: string;
    ADD_TO_CART?: string;
    REMOVE_ONE_FROM_CART?: string;
    REMOVE_ALL_FROM_CART?: string;
    UPDATE_CART?: string;
    CLEAR_CART?: string;
    ADD_TO_WISHLIST?: string;
    REMOVE_FROM_WISHLIST?: string;
    UPDATE_WISHLIST?: string;
    CLEAR_WISHLIST?: string;
    payload?: number;
}
export interface IShoppingState {
    products: IProduct[];
    cart: IProduct[];
}

export interface ICrudAction {
    type?: string;
    CREATE_DATA?: string;
    READ_ALL_DATA?: string;
    READ_ONE_DATA?: string;
    UPDATE_DATA?: string;
    DELETE_DATA?: string;
    NO_DATA?: string;
    payload?: number;
    payloadQuery?: SoccerPlayers[] | null;
    payloadMutation?: SoccerPlayers | null;
}

export interface ICrudState {
    db: SoccerPlayers[] | null;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity?: number;
}