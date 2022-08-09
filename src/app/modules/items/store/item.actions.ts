import { Action } from "@ngrx/store";
import { Item } from "src/app/_models/item";

export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export const ADD_ITEM_TO_DELIVERY = "ADD_ITEM_TO_DELIVERY";
export const ADD_ITEM_TO_ARCHIVE = "ADD_ITEM_TO_ARCHIVE";


export type ItemActions = AddNewItem | AddItemToDelivery | AddItemToArchive;

export class AddNewItem implements Action {
    readonly type = ADD_NEW_ITEM;

    constructor(public payload: { item: Item }) { }
}

export class AddItemToDelivery implements Action {
    readonly type = ADD_ITEM_TO_DELIVERY;

    constructor(public payload: { item: Item }) { }
}

export class AddItemToArchive implements Action {
    readonly type = ADD_ITEM_TO_ARCHIVE;

    constructor(public payload: { item: Item }) { }
}