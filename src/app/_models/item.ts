import { Store } from "./store";

export interface Item {
    id: string;
    name: string;
    store: string;
    price: number;
    deliveryDate: number;
}



export interface ItemMoke {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}
