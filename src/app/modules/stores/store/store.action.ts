import { Action } from "@ngrx/store";


export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export type storeActions = AddItemToStore | RemoveItemFromStore;

export class AddItemToStore implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: { storeName: string, price: number }) { }
}

export class RemoveItemFromStore implements Action {
    readonly type = REMOVE_ITEM;

    constructor(public payload: { storeName: string, price: number }) { }
}