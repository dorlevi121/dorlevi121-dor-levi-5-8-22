import { uniqueId } from "lodash";
import { Store, StoreDetails } from "src/app/_models/store";
import { ADD_ITEM, REMOVE_ITEM, storeActions } from "./store.action";

export interface StoreState {
    stores: Store[],
    storeDetails: StoreDetails
}

const initialState: StoreState = {
    stores: [
        {
            id: '1',
            name: 'Amazon'
        },
        {
            id: '2',
            name: 'Abra'
        },
        {
            id: '3',
            name: 'KSP'
        },
        {
            id: '4',
            name: 'Last Price'
        },
        {
            id: '5',
            name: 'Ali Expres'
        },
        {
            id: '6',
            name: 'Asos'
        },
    ],
    storeDetails: {}
}

export function storeReducer(state: StoreState = initialState, action: storeActions) {
    switch (action.type) {
        case ADD_ITEM: {
            let store: Store | undefined = state.stores.find(store => store.name === action.payload.storeName);
            if (!store) {
                store = { id: uniqueId(), name: action.payload.storeName };
            }

            const storeDetails = { ...state.storeDetails };
            if (!storeDetails[store.id]) {
                storeDetails[store.id] = { name: store.name, quantity: 0, totalPrice: 0 };
            }
            storeDetails[store.id].quantity++;
            storeDetails[store.id].totalPrice += action.payload.price;

            return {
                ...state,
                storeDetails: { ...storeDetails }
            };
        }

        case REMOVE_ITEM: {
            let store: Store | undefined = state.stores.find(store => store.name === action.payload.storeName);

            if (!store)
                return { ...state };

            const storeDetails = { ...state.storeDetails };

            if (storeDetails[store.id].quantity === 1) {
                delete storeDetails[store.id];
            }
            else {
                storeDetails[store.id].quantity--;
                storeDetails[store.id].totalPrice -= action.payload.price;
            }

            return {
                ...state,
                storeDetails: { ...storeDetails }
            }
        }

        default:
            return {
                ...state
            };
    }
}