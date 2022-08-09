export interface Store {
    id: string;
    name: string;
}


export interface StoreDetails { [id: string]: { name: string, quantity: number, totalPrice: number } }