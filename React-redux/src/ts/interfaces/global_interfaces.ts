export interface SoccerPlayers{
    id: number;
    name: string;
    position: string;
    team: string;
}

export interface IReducer {
    type: string;
    payload?: number;
}
export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity?: number;
}

export interface IShoppingCartState {
    products: IProduct[];
    cart: IProduct[];
}

export interface ICrudState {
    db: SoccerPlayers[] | null;
}

export interface ICrudReducer {
    type: string;
    payload?: number;
    payloadQuery?: SoccerPlayers[] | null;
    payloadMutation?: SoccerPlayers | null;
}