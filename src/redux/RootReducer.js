const initialState = {
    cart: {},
}

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CART":
            const [productId, productDetails] = action.payload
            return ({ ...state, cart: { ...state.cart, [productId]: productDetails, }, })
        case "REMOVE_CART":
            const updatedCart = { ...state.cart }
            delete updatedCart[action.payload]
            return { ...state, cart: updatedCart }
        default:
            return ({ state })
    }
}
