import { uniqueId } from "lodash";
import { Item, ItemMoke } from "src/app/_models/item";
import { ADD_ITEM_TO_ARCHIVE, ADD_ITEM_TO_DELIVERY, ADD_NEW_ITEM, ItemActions } from "./item.actions";


export interface ItemState {
    deliveryItems: Item[],
    archiveItems: Item[],
    products: ItemMoke[]
}

const initialState: ItemState = {
    deliveryItems: [],
    archiveItems: [],
    products: []
}

export function itemReducer(state: ItemState = initialState, action: ItemActions) {
    switch (action.type) {
        case ADD_NEW_ITEM:
            const newItem = { ...action.payload.item };
            newItem.id = uniqueId();

            return {
                ...state,
                deliveryItems: [...sortArrayByDate([...state.deliveryItems, newItem])]
            };

        case ADD_ITEM_TO_DELIVERY:
            const itemIndex = state.archiveItems.findIndex(item => item.id === action.payload.item.id);
            if (itemIndex === -1) {
                return { ...state }
            }
            const archiveItems = [...state.deliveryItems]
            archiveItems.splice(itemIndex, 1);

            return {
                ...state,
                deliveryItems: [...sortArrayByDate([...state.deliveryItems, state.archiveItems[itemIndex]])],
                archiveItems: [...archiveItems]
            }

        case ADD_ITEM_TO_ARCHIVE:
            const itemIndexArchive = state.deliveryItems.findIndex(item => item.id === action.payload.item.id);

            if (itemIndexArchive === -1) {
                return { ...state }
            }
            const deliveryItems = [...state.deliveryItems]
            deliveryItems.splice(itemIndexArchive, 1);

            return {
                ...state,
                archiveItems: [...sortArrayByDate([...state.archiveItems, state.deliveryItems[itemIndexArchive]])],
                deliveryItems: [...deliveryItems]
            }

        default:
            return { ...state };
    }
}


function sortArrayByDate(items: Item[]): Item[] {
    return items.sort((a, b) => Number(a.deliveryDate) - Number(b.deliveryDate));
}
